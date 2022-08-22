import { Button } from "@components/common/Button";
import { Input } from "@components/common/Input";
import { Link } from "@components/common/Link";
import { Typography } from "@components/common/Typography";
import { useLoginMutation } from "@data/auth/use-login.mutation";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getAllFieldValues } from "@utils/helpers";
import { FormValues } from "@utils/types";
import { useHeadStore } from "@utils/zustand/store";
import React from "react";
import * as yup from "yup";
import classes from "./styles.module.css";

export type LoginFormValuesType = {
  email: FormValues;
  password: FormValues;
};

const INITIAL_STATE = {
  email: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
};

type StateNameType = keyof typeof INITIAL_STATE;

const loginFormSchema = yup.object({
  password: yup.string().required("Password is required"),
  email: yup.string().required("Email is required").email("Email is not valid"),
});

export const LoginForm = () => {
  const [showPass, setShowPass] = React.useState(false);
  const { mutate: login, isLoading } = useLoginMutation();
  const [state, setState] = React.useState(INITIAL_STATE);
  const { setUser } = useHeadStore();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.currentTarget.name as StateNameType]: {
        ...state[e.currentTarget.name as StateNameType],
        value: e.currentTarget.value,
        error: "",
      },
    });
  };

  const setError = (field: StateNameType, error: string) => {
    setState({
      ...state,
      [field]: {
        ...state[field],
        error,
      },
    });
  };
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginFormSchema.validate(getAllFieldValues(state));
      login(
        { ...result },
        {
          onSuccess: (data) => {
            console.log({ data });
            if (data.data) setUser(data.data);
            else setError("email", data.message);
          },
          onError: (err: any) => {
            setError("email", err.response.data.message);
          },
        }
      );
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.path as StateNameType, err.message);
      }
    }
  };

  return (
    <div className={classes.justifyContainer}>
      <form onSubmit={onSubmit} method="post">
        <div className={classes.loginContainer}>
          <Typography variant="h1">LOGIN</Typography>
          <Input
            placeholder="Enter your email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={state.email.value}
            error={!!state.email.error}
            errorText={state.email.error}
            fullWidth
          />
          <Input
            placeholder="Enter your password"
            label="Password"
            name="password"
            type={showPass ? "text" : "password"}
            onChange={handleChange}
            value={state.password.value}
            error={!!state.password.error}
            errorText={state.password.error}
            endAdornment={
              <IconButton onClick={toggleShowPass}>
                {showPass ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            fullWidth
          />
          <Button disabled={isLoading} fullWidth type="submit">
            Login
          </Button>
          <Link>Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};
