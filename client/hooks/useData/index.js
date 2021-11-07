import React, { useEffect, useState, createContext, useContext } from 'react'
import { Platform } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
let dataURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
// let proxyURL = 'http://localhost:8000/api'
let proxyURL = '/api'
import fs from './fs'

// TODO: download react-device-detect
// TODO: if (mobileBrowser) then {offer mobile app download}
const getExt = (fileName) => {
  let arr = fileName.split('.')
  return '.' + arr[arr.length - 1]
}

const apiURL =
  Platform.OS === 'web' ? '/api/data' : 'https://www.catawbatour.org/api/data'

const DataContext = createContext()

export const DataProvider = ({ children, s3URL = '' }) => {
  const [data, setData] = useState(null)
  const [dataLoading, setDataLoading] = useState(true)
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then(async (truth) => {
        // console.log('got', truth)
        if (Platform.OS == 'android' || Platform.OS == 'ios') {
          let local =
            JSON.parse(await fs.readLocalString(fs.dir + '/db.json')) || truth
          let localDir = await fs.readDir(fs.dir)
          let trails = Object.keys(truth)
          trails.forEach(async (trail) => {
            let trailPath = fs.dir + trail
            console.log(trailPath)
            if (!localDir.includes(trail)) {
              console.log('no trail in local data')
              await fs.mkdir(trailPath)
            }
            let stops = Object.keys(truth[trail].stops)
            console.log('truth stops', stops)
            let trailDir = await fs.readDir(trailPath)

            stops.forEach(async (stop) => {
              console.log(stop)
              let stopPath = trailPath + '/' + stop
              console.log(stopPath)
              let stopData = truth[trail].stops[stop]
              let imageURL = stopData.image,
                imageExt = getExt(imageURL),
                imagePath = stopPath + '/image.' + imageExt

              let audioURL = stopData.audio,
                audioExt = getExt(audioURL),
                audioPath = stopPath + '/audio.' + audioExt

              let shouldUpdate = (() => {
                if (local[trail].stops?.[stop] == undefined) {
                  console.log('undefined stop')
                  return true
                }
                if (
                  Date.parse(stopData.updatedAt) >
                  Date.parse(local[trail].stops[stop]?.updatedAt)
                ) {
                  console.log('truth is newer')
                  return true
                }
                if (!trailDir[stop]) {
                  console.log('no stop folder in dir')
                  return true
                }
                return false
              })()
              if (shouldUpdate) {
                try {
                  console.log('deleting', stop)
                  await fs.delete(stopPath, { idempotent: true })
                  console.log('making', stop)
                  await fs.mkdir(stopPath)
                  await fs.download(imageURL, imagePath)
                  await fs.download(audioURL, audioPath)
                } catch (e) {
                  console.error(e)
                }
              }
              truth[trail].stops[stop].image = imagePath
              truth[trail].stops[stop].audio = audioPath
            })
          })
        }
        setData(truth)
        setDataLoading(false)
      })
  }, [])

  const fetchStop = async ({ trail, slug }) => {
    if (!data[trail].stops[slug]) {
      return null
    } else {
      console.log('stop data', data[trail].stops[slug])
      return data[trail].stops[slug]
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
            // console.log('stop data:', stopData)
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
