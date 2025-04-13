import { baseColors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';
import { shadows } from '../tokens/shadows';
import type { Theme } from '../context/ThemeContext';

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: baseColors.blue[400],
    secondary: baseColors.gray[400],
    success: '#4ade80',
    warning: '#fbbf24',
    danger: '#f87171',
    info: '#60a5fa',
    background: {
      default: baseColors.gray[900],
      paper: baseColors.gray[800],
    },
    text: {
      primary: baseColors.gray[100],
      secondary: baseColors.gray[300],
      disabled: baseColors.gray[500],
    },
    divider: baseColors.gray[700],
    border: baseColors.gray[700],
  },
  spacing,
  typography,
  shadows,
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
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
}; 