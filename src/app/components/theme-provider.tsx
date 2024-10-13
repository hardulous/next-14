"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "blue",
    secondary: "orange",
  },
};

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to consume context value
export const useTheme = ()=> useContext(ThemeContext)


// Here for Context Provider pattern in RSC we will define context at client level but render it at server level.