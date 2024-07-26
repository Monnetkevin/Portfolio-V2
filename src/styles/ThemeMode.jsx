import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme, LOCAL_STORAGE_KEY } from "./theme";
import DarkModeContext from "../components/context/DarkModeContext";

const ThemeMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY === true)
  );
  const theme = isDarkMode ? darkTheme : lightTheme;

  const ctxValue = {
    isDarkMode: isDarkMode,
    toggleTheme: toggleTheme,
  };

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(LOCAL_STORAGE_KEY, !isDarkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider value={ctxValue}>
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeMode;
