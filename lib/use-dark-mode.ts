import useDarkModeImpl from '@fisch0920/use-dark-mode'
import { useEffect, useState } from 'react'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark-mode' })
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return {
    isDarkMode: hasMounted ? darkMode.value : false,
    toggleDarkMode: darkMode.toggle
  }
}
