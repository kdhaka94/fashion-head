import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = {
  fontFamily: "Manrope",
  h1: {
    fontSize: "24px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.33,
    letterSpacing: "normal",
    color: "#000",
  },
  h2: {
    fontSize: "22px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.33,
    letterSpacing: "normal",
    color: "#000",
  },
  h3: {
    fontSize: "16px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 2,
    letterSpacing: "normal",
    color: "#000",
  },
  h4: {
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 2.67,
    letterSpacing: "normal",
  },
  body1: {
    fontSize: " 16px",
    fontWeight: " 300",
    fontStretch: " normal",
    fontStyle: " normal",
    lineHeight: 1.31,
    letterSpacing: " normal",
    color: "#000",
  },
  body2: {
    fontSize: "12px",
    fontWeight: "200",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.36,
    letterSpacing: "normal",
    color: "#000",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.08,
    letterSpacing: "normal",
    color: "#000",
  },
};
