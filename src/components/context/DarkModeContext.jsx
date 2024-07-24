import { createContext } from "react";

const DarkModeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export default DarkModeContext;
