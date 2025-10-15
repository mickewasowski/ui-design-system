import React, { createContext, useContext, useState } from "react";
import { ThemeEnum, type Theme, type ThemeContextType } from "../types/ThemeProvider.types"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(ThemeEnum.Light);
  const toggle = () => setTheme((t) => t === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light);

  return <ThemeContext.Provider value={{ theme, toggle }}>
    <div data-theme={theme}>
      {children}
    </div>
  </ThemeContext.Provider>
};


export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("useTheme must be used inside ThemeProvider!");

  return themeContext;
};
