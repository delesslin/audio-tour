import { BarCodeScanner } from 'expo-barcode-scanner'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useData from '../../hooks/useData'
// import Barcode from './Barcode'
import useScan from '../../hooks/useScan'
import Panel from '../Panel'

let timer
const Camera = ({ navigation, route }) => {
  const { barcode, handleScan, hasPermission, type } = useScan(BarCodeScanner)
  // const theme = useTheme()
  const data = useData()

  // TODO: Fix this issue: currently redirects to Home at end of timeout even after redirecting to a link
  useEffect(() => {
    timer = setTimeout(() => {
      // if route == 'Camera
      navigation.navigate('Home')
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  useEffect(() => {
    if (barcode.loaded) {
      clearTimeout(timer)
      const {
        cornerPoints,
        bounds,
        data: content,
        loaded,
        target,
        type,
      } = barcode
      const slug = content.split('/').pop()

      const i = data.findIndex((entry) => entry.slug === slug)
      if (i < 0) {
        navigation.navigate('Home')
        return
      }
      navigation.navigate('Stop', data[i])
    }
  }, [barcode.loaded])
  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <Panel color='teal'>
      <BarCodeScanner
        style={{
          ...StyleSheet.absoluteFill,
          flex: 1,
        }}
        type={type}
        onBarCodeScanned={handleScan}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
      >
        {/* {barcode.loaded ? (
          <Barcode onSelect={handleSelect} barcode={barcode} />
        ) : null} */}
      </BarCodeScanner>
    </Panel>
  )
}

export default Camera
