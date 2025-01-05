import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContextType, ThemeType, isThemeType } from './types';
import { Nullable } from 'types';

import { darkTheme, lightTheme } from 'styles';

export const ThemeContext = createContext<Nullable<ThemeContextType>>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const isLightTheme = theme === 'light';

  const toggleTheme = useCallback(() => {
    const updatedTheme = isLightTheme ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  }, [isLightTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const checkCurrentTheme = isThemeType(savedTheme);

    if (checkCurrentTheme) {
      setTheme(savedTheme);
    } else if (prefersLight) {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
