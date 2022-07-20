import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { typography } from "./typography";

// A custom theme for this app
const theme = createTheme({
  palette: colors,

  typography: typography,

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: 1.64,
          color: "#000",
          borderRadius: "8px",
          border: "solid 1px #d5d9e0",
          fontFamily: "Manrope",
          backgroundColor: "#fff",
        },
        input: {
          padding: "8px 12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          lineHeight: 1.69,
          color: "#fff",
          textTransform: "none",
          padding: "5px 36px",
        },
        outlined: {
          color: colors.primary.main,
          backgroundColor: "white",
        },
        sizeSmall: {
          fontFamily: "Manrope",
          fontSize: "14px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 1.64,
          letterSpacing: "normal",
        },
        outlinedSizeSmall: {
          fontFamily: "Manrope",
          fontSize: "14px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 1.64,
          letterSpacing: "normal",
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope",
          fontSize: "13px",
          fontWeight: 200,
          lineHeight: 1.38,
          letterSpacing: "normal",
        },
      },
    },  
  },
});

export default theme;
