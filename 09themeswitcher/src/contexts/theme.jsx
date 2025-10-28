import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themecode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// ✅ Use the .Provider directly from the context
export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};


