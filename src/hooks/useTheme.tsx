import { useEffect, useState } from 'react'

type ThemeModeType = 'light' | 'dark'
type UseThemeReturnType = {
  theme: ThemeModeType
  toggleTheme: () => void
  setToDarkMode: () => void
  setToLightMode: () => void
}

const localStorageThemeKey = 'theme'

const useTheme = (): UseThemeReturnType => {
  const [theme, setTheme] = useState<ThemeModeType>('light')

  const setToDarkMode = () => setTheme('dark')
  const setToLightMode = () => setTheme('light')
  const toggleTheme = () => {
    if (theme === 'light') return setToDarkMode()
    if (theme === 'dark') return setToLightMode()
  }

  const getPrevTheme = (currentTheme: ThemeModeType): ThemeModeType =>
    currentTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const storedTheme: ThemeModeType = localStorage?.[localStorageThemeKey]
    if (theme !== storedTheme) setTheme(storedTheme || 'light')
  }, [])

  useEffect(() => {
    const rootElement: HTMLElement = window.document.documentElement
    const prevTheme: ThemeModeType = getPrevTheme(theme)

    rootElement.classList.remove(prevTheme)
    rootElement.classList.add(theme)
    localStorage?.setItem(localStorageThemeKey, theme)
  }, [theme])

  return { theme, toggleTheme, setToDarkMode, setToLightMode }
}

export default useTheme
