import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ColorToken } from '../tokens/colors';
import type { Spacing } from '../tokens/spacing';
import type { Typography } from '../tokens/typography';
import type { Shadows } from '../tokens/shadows';
import type { Breakpoints } from '../tokens/breakpoints';
import { getStoredTheme, setStoredTheme } from '../utils/storage';
import { lightTheme, darkTheme } from '../themes';

export type Theme = {
  mode: 'light' | 'dark';
  colors: ColorToken;
  spacing: Spacing;
  typography: Typography;
  shadows: Shadows;
  breakpoints: Breakpoints;
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  };
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  };
  // 其他主题属性...
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = lightTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = getStoredTheme();
    return storedTheme === 'dark' ? darkTheme : defaultTheme;
  });

  useEffect(() => {
    setStoredTheme(theme.mode);
  }, [theme.mode]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newMode = prevTheme.mode === 'light' ? 'dark' : 'light';
      return newMode === 'light' ? lightTheme : darkTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}; 