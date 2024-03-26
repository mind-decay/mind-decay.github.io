import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContextType, ThemeType, isThemeType } from './types';
import { Nullable } from 'types/helpers';

import { darkTheme, lightTheme } from 'styles/themes';

const ThemeContext = createContext<Nullable<ThemeContextType>>(null);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const isLightTheme = theme === 'light';

  const toggleTheme = () => {
    const updatedTheme = isLightTheme ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

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
