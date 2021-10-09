import React, { useEffect, useState, createContext, useContext } from 'react'
import { Platform } from 'react-native'
// TODO: switch to Expo File System: https://docs.expo.dev/versions/latest/sdk/filesystem/
// import AsyncStorage from '@react-native-async-storage/async-storage'
import * as FileSystem from 'expo-file-system'
import xmlToTree from './xmlToTree'
let dataURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
// TODO: download react-device-detect
// TODO: if (mobileBrowser) then {offer mobile app download}
const getExt = (fileName) => {
  let arr = fileName.split('.')
  return '.' + arr[arr.length - 1]
}
const DataContext = createContext()
// TODO: refactor
// TODO: ensure through logs
export const DataProvider = ({ children, s3URL = dataURL }) => {
  const [data, setData] = useState(null)
  const [dataLoading, setDataLoading] = useState(true)
  useEffect(() => {
    // TODO: localStorage on non web platform
    console.log('fetching data map')
    // TODO: how do we handle no internet access?
    xmlToTree(s3URL).then(async (truth) => {
      // TODO: PLATFORM.OS == 'web' ?  () : ()
      if (Platform.OS == 'web') {
        setData(truth)
        setDataLoading(false)
        return
      }
      let local = JSON.parse(
        await FileSystem.readAsStringAsync(
          FileSystem.documentDirectory + 'db.json'
        )
      )
      if (typeof local == 'string') {
        console.log('NO DB!')
        local = {}
      }
      const files = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory
      )
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
          if (!stopFiles.includes(stop)) {
            await FileSystem.makeDirectoryAsync(stopPath)
          }

          const localImageDate = new Date(
            local[trail]?.[stop]?.image?.lastModified || '2001-1-1'
          )
          const truthImageDate = new Date(truth[trail][stop].image.lastModified)
          truth[trail][stop].image.uri =
            stopPath + '/image' + getExt(truth[trail][stop].image.file)
          if (truthImageDate.to > localImageDate) {
            console.log('fetching image data')
            let { uri } = await FileSystem.downloadAsync(
              truth[trail][stop].image.url,
              truth[trail][stop].image.uri
            )
            truth[trail][stop].image.uri = uri
          }
          const localAudioDate =
            new Date(local[trail][stop].audio.lastModified) ||
            new Date(2001, 1, 1)
          const truthAudioDate = new Date(truth[trail][stop].audio.lastModified)
          truth[trail][stop].audio.uri =
            stopPath + '/audio' + getExt(truth[trail][stop].audio.file)

          if (truthAudioDate > localAudioDate) {
            let { uri } = await FileSystem.downloadAsync(
              truth[trail][stop].audio.url,
              truth[trail][stop].audio.uri
            )
            console.log('downloaded audio data')
            truth[trail][stop].audio.uri = uri
          }
          const localTextDate =
            new Date(local[trail][stop].data.lastModified) ||
            new Date(2001, 1, 1)
          const truthTextDate = new Date(truth[trail][stop].data.lastModified)

          if (truthTextDate > localTextDate) {
            console.log('Fetching text data')
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
            truth[trail][stop] = {
              ...local[trail][stop],
              ...truth[trail][stop],
            }
          }
        }
      }
      // console.log(truth)
      setData(truth)
      setDataLoading(false)
    })
  }, [])

  // TODO: Move function out of hook
  const fetchStop = async ({ trail, slug }) => {
    let stopData = data[trail][slug] || {}

    if (stopData === {}) {
      // console.log('empty stop')
      return stopData
    } else if (
      stopData.hasOwnProperty('narrator') &&
      stopData.hasOwnProperty('title')
    ) {
      // console.log('ALREADY HAVE DATA')
      return stopData
    } else if (Platform.OS == 'web') {
      // console.log('NEED DATA')
      console.log('fetching data for web')
      return await fetch(stopData.data.url)
        .then((res) => res.json())
        .then(async ({ title, narrator }) => {
          return await fetch(stopData.transcript.url)
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
    if (!dataLoading) {
      fetchStop({ trail, slug })
        .then((stopData) => {
          if (stopData == {}) {
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
