export const themeTransition = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
  },
  property: {
    all: 'all',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity',
    transform: 'transform',
  },
} as const;

export const createTransition = (
  properties: string | string[],
  duration: keyof typeof themeTransition.duration = 'normal',
  timing: keyof typeof themeTransition.timing = 'ease-in-out',
) => {
  const props = Array.isArray(properties) ? properties.join(', ') : properties;
  return `${props} ${themeTransition.duration[duration]} ${themeTransition.timing[timing]}`;
}; 