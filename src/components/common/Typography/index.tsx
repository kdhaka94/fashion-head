import { Typography as MuiTypography, TypographyProps } from "@mui/material";

type IProps = {} & TypographyProps;

export const Typography = ({ ...rest }: IProps) => {
  return <MuiTypography {...rest} />;
};
