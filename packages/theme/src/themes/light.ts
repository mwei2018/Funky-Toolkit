import { baseColors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';
import { shadows } from '../tokens/shadows';
import { breakpoints } from '../tokens/breakpoints';
import type { Theme } from '../context/ThemeContext';

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: baseColors.blue[600],
    secondary: baseColors.gray[500],
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    background: {
      default: baseColors.white,
      paper: baseColors.gray[50],
    },
    text: {
      primary: baseColors.gray[900],
      secondary: baseColors.gray[600],
      disabled: baseColors.gray[400],
    },
    divider: baseColors.gray[200],
    border: baseColors.gray[200],
  },
  spacing,
  typography,
  shadows,
  breakpoints,
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