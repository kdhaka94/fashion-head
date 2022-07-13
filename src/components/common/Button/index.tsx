import { Button as MuiButton, ButtonProps } from "@mui/material";

type IProps = {} & ButtonProps;

export const Button = ({ ...rest }: IProps) => {
  return <MuiButton variant="contained" {...rest} />;
};
