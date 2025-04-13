export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Breakpoints = typeof breakpoints;

export const mediaQueries = {
  up: (breakpoint: keyof Breakpoints) => `@media (min-width: ${breakpoints[breakpoint]})`,
  down: (breakpoint: keyof Breakpoints) => `@media (max-width: ${breakpoints[breakpoint]})`,
  between: (min: keyof Breakpoints, max: keyof Breakpoints) =>
    `@media (min-width: ${breakpoints[min]}) and (max-width: ${breakpoints[max]})`,
} as const; 