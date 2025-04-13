import type { Colors } from './tokens/colors';
import type { Typography } from './tokens/typography';
import type { Spacing } from './tokens/spacing';
import type { Shadows } from './tokens/shadows';

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  shadows: Shadows;
  borderRadius: {
    DEFAULT: string;
  };
  transition: {
    colors: string;
  };
  mediaQueries: {
    down: (breakpoint: string) => string;
  };
} 