  import {
    FormHelperText,
    OutlinedInput,
    OutlinedInputProps,
  } from "@mui/material";
import { Typography } from "../Typography";
import classes from "./styles.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export type IPropsInput = {
  errorText?: string;
} & OutlinedInputProps;

export const getWidth = (fullWidth: boolean) => ({
  width: fullWidth ? "100%" : "auto",
});

export const Input = ({ label, errorText = "", ...rest }: IPropsInput) => {
  return (
    <div style={getWidth(!!rest.fullWidth)}>
      {label && <InputLabel title={label} />}
      <OutlinedInput {...rest} />
      {!!rest.error && (
        <div className={classes.errorContainer}>
          <ErrorOutlineIcon color="error"/>
          <FormHelperText error>{errorText}</FormHelperText>
        </div>
      )}
    </div>
  );
};

export const InputLabel = ({ title }: { title: any }) => {
  return <Typography className={classes.inputLabel}>{title}</Typography>;
};
