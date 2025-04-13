import { useThemeContext } from '../context/ThemeContext';
import type { Theme } from '../context/ThemeContext';

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useThemeContext();

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme({
      ...theme,
      ...newTheme,
    });
  };

  return {
    theme,
    setTheme,
    updateTheme,
    toggleTheme,
    isDarkMode: theme.mode === 'dark',
  };
} 