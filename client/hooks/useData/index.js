import React, { useEffect, useState, createContext, useContext } from 'react'

import xmlToTree from './xmlToTree'
let dataURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'

const DataContext = createContext()
export const DataProvider = ({ children, s3URL = dataURL }) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    xmlToTree(s3URL).then(setData)
  }, [])

  const fetchStop = async ({ trail, slug }) => {
    let stopData = data[trail][slug]
    if (
      stopData.hasOwnProperty('narrator') &&
      stopData.hasOwnProperty('title')
    ) {
      return await stopData
    } else {
      return await fetch(stopData.data.url)
        .then((res) => res.json())
        .then(({ title, narrator }) => {
          // console.log('OBJ: ', obj)
          // console.log(stopData.transcript.url)
          return fetch(stopData.transcript.url)
            .then((res) => res.text())
            .then((transcript) => {
              stopData.transcript = transcript
              stopData.title = title
              stopData.narrator = narrator

              setData((oldData) => {
                oldData[trail][slug] = stopData
                return oldData
              })
              return stopData
            })
        })
    }
  }
  return (
    <DataContext.Provider value={{ data, fetchStop }}>
      {children}
    </DataContext.Provider>
  )
}

export default ({ trail, slug }) => {
  const { fetchStop } = useContext(DataContext)
  let [stop, setStop] = useState({})
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  useEffect(() => {
    try {
      fetchStop({ trail, slug }).then((stopData) => {
        // console.log('STOP DATA: ', stopData)
        setStop(stopData)
        setLoading(false)
      })
    } catch (e) {
      console.error(e)
      setLoading(false)
      setError(true)
    }
  }, [trail, slug])
  return { stop, loading, error }
}
