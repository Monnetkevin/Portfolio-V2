import { useContext } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DarkModeContext from "../context/DarkModeContext";

export const ButtonProject = ({ children, ...props }) => {
  const theme = useTheme();
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        mb: 1,
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
        "&:hover": {
          borderColor: isDarkMode
            ? theme.palette.tertiary.main
            : theme.palette.secondary.main,
          color: isDarkMode
            ? theme.palette.tertiary.main
            : theme.palette.secondary.main,
        },
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonProject2 = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined"
      target="_blank"
      sx={{
        mr: "1rem",
        color: "#000",
        borderColor: "#000",
        "&:hover": {
          borderColor: "#005C53",
          color: "#005C53",
        },
      }}
    >
      {children}
    </Button>
  );
};
