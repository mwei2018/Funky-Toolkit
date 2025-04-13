import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as ThemeContextProvider } from '@funky/theme';
import type { ThemeProviderProps } from '@funky/theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme }) => {
  return (
    <ThemeContextProvider defaultTheme={defaultTheme}>
      <EmotionThemeProvider theme={defaultTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContextProvider>
  );
}; 