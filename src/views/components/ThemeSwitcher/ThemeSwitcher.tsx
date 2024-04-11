import { useTheme } from 'context/ThemeContext';

import { StyledThemeSwitcher } from './ThemeSwitcher.styled';

import SunIcon from 'assets/images/sunIcon.svg?react';
import MoonIcon from 'assets/images/moonIcon.svg?react';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeSwitcher onClick={toggleTheme} aria-label="Переключить тему">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </StyledThemeSwitcher>
  );
};
