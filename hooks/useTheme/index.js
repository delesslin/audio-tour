import React, { createContext, useContext } from 'react'
const theme = {
  colors: {
    navy: '#051940',
    teal: '#41b2a2',
    yellow: '#fbc10b',
    blue: '#0bbcee',
    red: '#f25a38',
    white: '#fefefe',
  },
}
const ThemeContext = createContext()

export default function useTheme() {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
