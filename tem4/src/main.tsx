import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/manrope/400.css"; // Regular
import "@fontsource/manrope/500.css"; // Medium
import "@fontsource/manrope/700.css"; // Bold
// import { ThemeProvider } from "../src/Theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
);
