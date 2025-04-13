const THEME_STORAGE_KEY = 'pnpm-toolkit-theme';

export const getStoredTheme = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(THEME_STORAGE_KEY);
};

export const setStoredTheme = (theme: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}; 