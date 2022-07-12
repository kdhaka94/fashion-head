import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@utils/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
