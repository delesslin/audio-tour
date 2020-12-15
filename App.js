// TODO implement opacity for barcode View
import React from 'react'
import { DataProvider } from './hooks/useData'
import { ThemeProvider } from './hooks/useTheme'
import Views from './Views'

// TODO: move to /Views folder
export default function App() {
  return (
    <DataProvider>
      <ThemeProvider>
        <Views />
      </ThemeProvider>
    </DataProvider>
  )
}
