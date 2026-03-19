export const THEME_STORAGE_KEY = 'aureup-theme'

export const THEMES = {
  dark: 'dark',
  light: 'light',
}

export function getStoredTheme() {
  if (typeof window === 'undefined') return THEMES.dark

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return savedTheme === THEMES.light ? THEMES.light : THEMES.dark
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return

  document.documentElement.setAttribute('data-theme', theme)
  document.body.setAttribute('data-theme', theme)
}
