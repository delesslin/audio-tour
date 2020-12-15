import React, { useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, Text, View } from 'react-native'

import Barcode from './Barcode'
import useScan from '../../hooks/useScan'
import useTheme from '../../hooks/useTheme'
import Panel from '../Panel'
const Camera = ({ navigation, route }) => {
  const { barcode, handleScan, hasPermission, type } = useScan(BarCodeScanner)
  const theme = useTheme()
  const handleSelect = (props) => {
    navigation.navigate('Stop', props)
  }
  // TODO: Fix this issue: currently redirects to Home at end of timeout even after redirecting to a link
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // if route == 'Camera
  //     navigation.navigate('Home')

  //   }, 5000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])
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
      >
        {barcode.loaded ? (
          <Barcode onSelect={handleSelect} barcode={barcode} />
        ) : null}
      </BarCodeScanner>
    </Panel>
  )
}

export default Camera
