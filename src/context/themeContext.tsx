import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { lightTheme, darkTheme } from "@/styles/themes";
import { ThemeProvider } from "styled-components";
import type { DefaultTheme } from "styled-components";

type ThemeType = "darkTheme" | "lightTheme";

interface ThemeContextType {
  currentTheme: ThemeType;
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("lightTheme");

  const getStoredTheme = () => {
    const stored = localStorage.getItem("selectedTheme") as ThemeType;
    setCurrentTheme(stored || "darkTheme");
  };

  const saveThemeToStorage = (theme: ThemeType) => {
    localStorage.setItem("selectedTheme", theme);
  };

  const toggleTheme = () => {
    const newTheme: ThemeType = currentTheme === "darkTheme" ? "lightTheme" : "darkTheme";
    saveThemeToStorage(newTheme);
    setCurrentTheme(newTheme);
  };

  const theme = currentTheme === "darkTheme" ? darkTheme : lightTheme;

  useEffect(() => {
    getStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext deve ser usado dentro de ThemeProviderContext");
  }
  return context;
};
