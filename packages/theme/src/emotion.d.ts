import '@emotion/react';
import type { Theme } from './context/ThemeContext';

declare module '@emotion/react' {
  export interface Theme extends Theme {}
} 