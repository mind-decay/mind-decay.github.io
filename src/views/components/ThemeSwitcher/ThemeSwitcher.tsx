import { useTheme } from 'context/ThemeContext/ThemeContext';

import { StyledThemeSwitcher } from './ThemeSwithcer.styled';

import { ReactComponent as SunIcon } from 'assets/images/sunIcon.svg';
import { ReactComponent as MoonIcon } from 'assets/images/moonIcon.svg';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledThemeSwitcher onClick={toggleTheme}>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</StyledThemeSwitcher>
  );
};
