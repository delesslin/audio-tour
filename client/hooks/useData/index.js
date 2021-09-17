import * as FileSystem from 'expo-file-system'
import React, { createContext, useContext, useEffect, useState } from 'react'
const DataContext = createContext()
const useData = () => useContext(DataContext)
export default useData
// this time it shouldn't download shit

const URL = `https://catawba-tour.herokuapp.com`

let download = async (path) => {
  await FileSystem.downloadAsync(
    `${URL}/api${path}`,
    FileSystem.documentDirectory + path
  )
    .then(({ uri }) => {
      console.log('Finished downloading to ', path)
    })
    .catch((error) => {
      console.error(error)
    })
}
async function ensureDirExists(dir) {
  try {
    const dirInfo = await FileSystem.getInfoAsync(dir)
    if (!dirInfo.exists) {
      console.log(`${dir} doesn't exist. creating...`)
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
    }
  } catch (e) {
    console.error(e)
  }
}
const downloadAssets = async (data) => {
  await ensureDirExists(FileSystem.documentDirectory + '/audio')
  await ensureDirExists(FileSystem.documentDirectory + '/image')
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      try {
        let { image, audio } = data[i]
        let imgPath = `/image/${image}`
        let audioPath = `/audio/${audio}`
        download(imgPath)
        download(audioPath)
      } catch (e) {
        console.error(e)
      }
    }
  }
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    // TODO: refactor and make synchronizing more robust
    let init = async () => {
      let dbURL = `${URL}/api/db.json`
      let { CREATION_DATE: remote_date, data: remote_data } = await fetch(
        dbURL
      ).then((res) => res.json())
      let localURI = FileSystem.documentDirectory + '/db.json'
      let { exists } = await FileSystem.getInfoAsync(localURI)
      console.log('Does DB exist??', exists)
      if (!exists) {
        console.log('No DB, downloading')
        await download('/db.json')
        await downloadAssets(remote_data)
        setData(remote_data)
        return
      }
      let { CREATION_DATE: local_date, data: local_data } =
        await FileSystem.readAsStringAsync(localURI).then(JSON.parse)
      let local = new Date(local_date)
      let remote = new Date(remote_date)
      // > evaluates to "more recent than"
      if (remote > local) {
        console.log('remote more up to date')
        await download('/db.json')
        await downloadAssets(remote_data)
        setData(remote_data)
        return
      }
      console.log('Local data is up to date')
      setData(local_data)
    }
    init()
  }, [])

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}
