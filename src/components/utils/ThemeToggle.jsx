import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { Box, IconButton } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <Box component="div">
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {isDarkMode ? <LightModeIcon /> : <ModeNightIcon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;
