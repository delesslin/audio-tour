import React, { createContext, useContext, useEffect, useState } from 'react'
import jsonData from '../../assets/data'
const DataContext = createContext()

const useData = (_id) => {
  const data = useContext(DataContext)
  console.log(data)
  return data.filter(({ slug }) => slug === _id)
}

export default useData

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()
  useEffect(() => {
    console.log(setData)
    setData(jsonData)
  }, [])
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
