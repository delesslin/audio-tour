import React, { useEffect, useState, createContext, useContext } from 'react'
import { Platform } from 'react-native'
import * as FileSystem from 'expo-file-system'
import xmlToTree from './xmlToTree'
import NetInfo from '@react-native-community/netinfo'
let dataURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
// let proxyURL = 'http://localhost:8000/api'
let proxyURL = '/api'
// TODO: download react-device-detect
// TODO: if (mobileBrowser) then {offer mobile app download}
const getExt = (fileName) => {
  let arr = fileName.split('.')
  return '.' + arr[arr.length - 1]
}

const apiURL = (url) => `${Platform.OS === 'web' ? proxyURL : dataURL}/${url}`

const DataContext = createContext()
// const devDelete = async () => {
//   await FileSystem.deleteAsync(FileSystem.documentDirectory + 'db.json').then(
//     () => console.log('DELETE DB')
//   )
//   await FileSystem.deleteAsync(FileSystem.documentDirectory + 'cultural').then(
//     () => console.log('DELETE ASSETS')
//   )
//   await FileSystem.readDirectoryAsync(FileSystem.documentDirectory).then(
//     console.log
//   )
// }
// TODO: refactor
// TODO: ensure through logs
export const DataProvider = ({ children, s3URL = '' }) => {
  const [data, setData] = useState(null)
  const [dataLoading, setDataLoading] = useState(true)
  useEffect(() => {
    console.log(apiURL(s3URL))
    xmlToTree(apiURL(s3URL)).then(async (truth) => {
      if (Platform.OS == 'web') {
        setData(truth)
        setDataLoading(false)
        return
      }
      const files = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory
      )

      let local = {}

      if (files.includes('db.json')) {
        local = JSON.parse(
          await FileSystem.readAsStringAsync(
            FileSystem.documentDirectory + 'db.json'
          )
        )
      }
      const localExists = (() => {
        const keys = Object.keys(local)

        return keys.length > 0
      })()

      const trails = Object.keys(truth)
      for (let trail of trails) {
        let trailPath = FileSystem.documentDirectory + trail
        if (!files.includes(trail)) {
          await FileSystem.makeDirectoryAsync(trailPath)
        }
        let stops = Object.keys(truth[trail])
        let stopFiles = await FileSystem.readDirectoryAsync(trailPath)

        for (let stop of stops) {
          let stopPath = trailPath + `/${stop}`
          let pathExists = true
          if (!stopFiles.includes(stop)) {
            await FileSystem.makeDirectoryAsync(stopPath)
            pathExists = false
          }
          let pathFiles = await FileSystem.readDirectoryAsync(stopPath)

          const updateBoolFN = (property) => {
            if (!localExists || !pathFiles.includes(property)) {
              return true
            }

            return (
              new Date(truth[trail][stop][property].lastModified) >
              new Date(local[trail][stop][property].lastModified)
            )
          }
          const imgUpdateBool = updateBoolFN('image')

          truth[trail][stop].image.uri =
            stopPath + '/image' + getExt(truth[trail][stop].image.file)
          if (imgUpdateBool) {
            // console.log('fetching image data')
            // console.log(truth[trail][stop].image.url)
            let { uri } = await FileSystem.downloadAsync(
              truth[trail][stop].image.url,
              truth[trail][stop].image.uri
            )
            truth[trail][stop].image.uri = uri
          }
          const audioUpdateBool = updateBoolFN('audio')

          truth[trail][stop].audio.uri =
            stopPath + '/audio' + getExt(truth[trail][stop].audio.file)
          // console.log(truth[trail][stop].audio.uri)
          if (audioUpdateBool) {
            // console.log('fetching audio data')
            // console.log(truth[trail][stop].audio.url)
            let { uri } = await FileSystem.downloadAsync(
              truth[trail][stop].audio.url,
              truth[trail][stop].audio.uri
            )
            truth[trail][stop].audio.uri = uri
          }
          const textUpdateBool = updateBoolFN('data')

          if (textUpdateBool) {
            await fetch(truth[trail][stop].data.url)
              .then((res) => res.json())
              .then(
                async ({ narrator = 'no narrator', title = 'no title' }) => {
                  return await fetch(truth[trail][stop].transcript.url)
                    .then((res) => res.text())
                    .then((text) => {
                      truth[trail][stop] = {
                        ...truth[trail][stop],
                        narrator,
                        title,
                        text,
                      }
                    })
                }
              )
          } else {
            // console.log('using local text data')
            truth[trail][stop] = {
              ...local?.[trail]?.[stop],
              ...truth[trail][stop],
            }
          }
        }
      }
      // console.log(truth)
      await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'db.json',
        JSON.stringify(truth)
      )
      setData(truth)
      setDataLoading(false)
    })
  }, [])

  // TODO: Move function out of hook
  const fetchStop = async ({ trail, slug }) => {
    let stopData = data[trail][slug] || {}

    if (stopData === {}) {
      // console.log('empty stop')
      return null
    } else if (
      stopData.hasOwnProperty('narrator') &&
      stopData.hasOwnProperty('title')
    ) {
      // console.log('ALREADY HAVE DATA')
      return stopData
    } else if (Platform.OS == 'web') {
      console.log('fetching data for web', stopData.data.url)
      return await fetch(stopData.data.url)
        .then((res) => res.json())
        .then(async ({ title, narrator }) => {
          return await fetch(stopData.transcript.url)
            .then((res) => res.text())
            .then((transcript) => {
              stopData.text = transcript
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
    <DataContext.Provider value={{ data, fetchStop, dataLoading }}>
      {children}
    </DataContext.Provider>
  )
}

export default ({ trail, slug }) => {
  const { fetchStop, dataLoading } = useContext(DataContext)
  let [stop, setStop] = useState({})
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(false)

  useEffect(() => {
    // console.log('data loading:', dataLoading)
    if (!dataLoading) {
      fetchStop({ trail, slug })
        .then((stopData) => {
          if (stopData == null) {
            console.log('stop data:', stopData)
            setError(true)
            return
          }
          setStop(stopData)
        })
        .catch((e) => {
          console.error(e)
          setError(true)
        })
        .finally(() => setLoading(false))
    }
  }, [trail, slug, dataLoading])
  return { stop, loading, error }
}
