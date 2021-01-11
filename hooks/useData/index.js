import React, { createContext, useContext, useEffect, useState } from 'react'
import tourData from '../../assets'

const DataContext = createContext()

const useData = () => {
  const data = useContext(DataContext)
  const dataIncludes = (_id) => {
    const index = data.findIndex(({ slug }) => slug === _id)

    return index >= 0 ? true : false
  }
  const filterData = (_id) => {
    return data.filter(({ slug }) => slug === _id)
  }
  return { dataIncludes, filterData }
}

export default useData

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(tourData)
  }, [])
  // useEffect(() => {
  //   setData(() => {
  //     return tourData
  //       .reduce((acc, curr) => {
  //         const audio = audio_registry[curr.slug]
  //         if (audio != null) {
  //           return [...acc, { ...curr, audio }]
  //         } else {
  //           console.log(`No Audio for ${curr.slug}`)
  //           return [...acc, curr]
  //         }
  //       }, [])
  //       .reduce((acc, curr) => {
  //         const image = image_registry[curr.slug]
  //         if (image != null) {
  //           return [...acc, { ...curr, image }]
  //         } else {
  //           console.log(`No image for ${curr.slug}`)
  //           return [...acc, curr]
  //         }
  //       }, [])
  //     return
  //   })
  // }, [])
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
