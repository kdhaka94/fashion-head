import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ModalsContainer } from "@utils/zustand/ModalsContainer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Centerlizer } from "./components/common/Centerlizer";
import "./index.css";
import { QueryContainer } from "./utils/api/QueryContainer";
import theme from "./utils/theme";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(MOUNT_NODE);

root.render(
  <React.StrictMode>
    <QueryContainer>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Centerlizer>
          <App />
        </Centerlizer>
      </ThemeProvider>
    </QueryContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
