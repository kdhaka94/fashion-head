import React from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { getWidth, InputLabel } from "../Input";
import classes from "./styles.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { FormHelperText } from "@mui/material";

export type IPropsTextField = {
  errorText?: string;
} & TextFieldProps;

export const TextField = ({ label, errorText, ...rest }: IPropsTextField) => {
  return (
    <div style={getWidth(!!rest.fullWidth)}>
      {label && <InputLabel title={label} />}
      <MuiTextField {...rest} />
      {!!rest.error && (
        <div className={classes.errorContainer}>
          <ErrorOutlineIcon color="error" />
          <FormHelperText error>{errorText}</FormHelperText>
        </div>
      )}
    </div>
  );
};
