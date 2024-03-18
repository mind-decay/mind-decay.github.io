export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const isThemeType = (theme: string | null): theme is ThemeType => {
  return typeof theme === 'string' && ['light', 'dark'].includes(theme);
};
