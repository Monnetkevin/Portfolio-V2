import { createTheme } from "@mui/material/styles";

export const LOCAL_STORAGE_KEY = "isDarkMode";

const baseTheme = createTheme({
  typography: {
    fontFamily: "Roboto", // Police de caractères
    h1: {
      fontSize: "2.2rem", // Taille des titres H1
      fontWeight: 500,
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#042940", // Couleurs primaires
    },
    secondary: {
      main: "#005C53", // Couleurs secondaires
    },
    tertiary: {
      main: "#DBF227", // Couleurs tertiaires
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    }, // Couleurs de texte
    experience: {
      main: "#D6D58E",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#005C53",
    },
    tertiary: {
      main: "#DBF227",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    experience: {
      main: "#D6D58E",
    },
    background: {
      paper: "#fff",
      default: "#000",
    },
  },
});
