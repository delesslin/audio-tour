import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  Platform,
} from 'react'

const apiURL =
  Platform.OS === 'web' ? '/api/data' : 'https://www.catawbatour.org/api/data'
const STATIC_CONTEXT = createContext()

export const StaticProvider = ({ children }) => {
  const [assets, setAssets] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(apiURL)
      .then(async (data) => {
        return await data.json()
      })
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
