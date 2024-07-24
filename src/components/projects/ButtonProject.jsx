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
  const theme = useTheme();
  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        mr: "1rem",
        color: theme.palette.text.secondary,
        borderColor: theme.palette.text.secondary,
        "&:hover": {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
        },
      }}
    >
      {children}
    </Button>
  );
};
