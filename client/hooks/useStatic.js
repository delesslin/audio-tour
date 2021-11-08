import React, { createContext, useState, useEffect, useContext } from 'react'
import { Platform } from 'react-native'
const apiURL =
  Platform.OS == 'web'
    ? '/api/static'
    : 'https://www.catawbatour.org/api/static'
const STATIC_CONTEXT = createContext()

export const StaticProvider = ({ children }) => {
  const [assets, setAssets] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(apiURL)
      .then((data) => data.json())
      .then((data) => {
        setAssets(data)
        setLoading(false)
      })
  }, [])
  return (
    <STATIC_CONTEXT.Provider value={{ ...assets, loading }}>
      {children}
    </STATIC_CONTEXT.Provider>
  )
}

const useStatic = () => {
  return useContext(STATIC_CONTEXT)
}

export default useStatic