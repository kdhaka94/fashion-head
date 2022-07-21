import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useLoginMutation } from "@data/auth/use-login.mutation";
import { validateEmail } from "@utils/helpers";
import { FormValues } from "@utils/types";
import { Button } from "@components/common/Button";
import { Input } from "@components/common/Input";
import { Link } from "@components/common/Link";
import { Typography } from "@components/common/Typography";
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

const loginFormSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginForm = () => {
  const [showPass, setShowPass] = React.useState(false);
  const { mutate: login, isLoading } = useLoginMutation();
  const [state, setState] = React.useState(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.currentTarget.name as "email" | "password"]: {
        ...state[e.currentTarget.name as "email" | "password"],
        value: e.currentTarget.value,
        error: "",
      },
    });
  };

  const setError = (field: "email" | "password", error: string) => {
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


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.email.value) {
      setError("email", "Email is required");
      return;
    }
    if (!validateEmail(state.email.value)) {
      setError("email", "Email not valid");
      return;
    }
    if (!state.password.value) {
      setError("password", "Password is required");
      return;
    }

    login(
      { email: state.email.value, password: state.password.value },
      {
        onSuccess: (data) => {
          console.log({ data });
        },
      }
    );
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
            errorText={state.email.error}
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
