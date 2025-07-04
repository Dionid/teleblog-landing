import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage for dark mode preference
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('darkMode')
      if (storedMode === null) {
        // If no preference is stored, check system preference
        return global.matchMedia?.('(prefers-color-scheme: dark)').matches
      }
      return storedMode === 'true'
    }
    return false
  })

  useEffect(() => {
    // Update the body class based on dark mode preference
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-mode', darkMode)
    }
  }, [darkMode])

  return {
    isDarkMode: darkMode,
    toggleDarkMode: () => {
      setDarkMode((prevMode) => {
        const newMode = !prevMode
        localStorage.setItem('darkMode', newMode.toString())
        return newMode
      })
    }
  }
}
