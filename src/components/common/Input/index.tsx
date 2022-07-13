import {
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { Typography } from "../Typography";
import classes from "./styles.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type IProps = {
  errorText?: string;
} & OutlinedInputProps;

const getWidth = (fullWidth: boolean) => ({
  width: fullWidth ? "100%" : "auto",
});

export const Input = ({ label, errorText = "", ...rest }: IProps) => {
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

const InputLabel = ({ title }: { title: any }) => {
  return <Typography className={classes.inputLabel}>{title}</Typography>;
};
