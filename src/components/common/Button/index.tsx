import { Button as MuiButton, ButtonProps } from "@mui/material";

type IProps = {
  component?: string;
} & ButtonProps;

export const Button = ({ ...rest }: IProps) => {
  return <MuiButton variant="contained" {...rest} />;
};
