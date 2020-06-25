import React, { createContext, useEffect, useState } from 'react'
import { THEME } from '../constants'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [theme, themeSet] = useState(null)

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || THEME.LIGHT
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.classList.remove(...$html.classList)
    $html.classList.add(theme.toString())
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
