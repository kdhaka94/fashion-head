import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Button } from "../../../common/Button";
import { Input } from "../../../common/Input";
import { Link } from "../../../common/Link";
import { Typography } from "../../../common/Typography";
import classes from "./styles.module.css";

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

export const LoginForm = () => {
  const [state, setState] = React.useState(INITIAL_STATE);
  const [showPass, setShowPass] = React.useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.currentTarget.name]: {
        ...state[e.currentTarget.name as "email" | "password"],
        value: e.currentTarget.value,
      },
    });
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className={classes.justifyContainer}>
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
        <Button fullWidth>Login</Button>
        <Link>Forgot Password?</Link>
      </div>
    </div>
  );
};
