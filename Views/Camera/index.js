import React from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet, Text, View } from 'react-native'

import Barcode from './Barcode'
import useScan from '../../hooks/useScan'
import useTheme from '../../hooks/useTheme'
import Panel from '../Panel'
const Camera = ({ navigation }) => {
  const { barcode, handleScan, hasPermission, type } = useScan(BarCodeScanner)
  const theme = useTheme()
  const handleSelect = (props) => {
    navigation.navigate('Stop', props)
  }
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
