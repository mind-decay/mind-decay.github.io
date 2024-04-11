import { Nullable } from 'types';

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const isThemeType = (theme: Nullable<string>): theme is ThemeType => {
  return typeof theme === 'string' && ['light', 'dark'].includes(theme);
};
