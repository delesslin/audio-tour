import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Theme from '../../Theme'
// TODO: parse QR codes and verify they are from an expected url
const Camera = ({ navigation }) => {
  const [data, setData] = useState({})
  const [hasPermission, setHasPermission] = useState(null)
  const goTo = () => {
    navigation.navigate('Stop', data)
  }
  const handleScan = ({ type, data }) => {
    let host = 'tour.catawbaculture.org'
    if (data.includes(host)) {
      let [trail, stop] = data.split(host)[1].split('/stop/')[1].split('/')
      setData({ trail, slug: stop })
    }
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles().page}>
      <Text style={styles().title}>Point at a Tour Code</Text>

      <View style={styles(400).cameraView}>
        {data.trail ? (
          <Button onPress={goTo} title={'Go!'} />
        ) : (
          <BarCodeScanner
            onBarCodeScanned={handleScan}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={StyleSheet.absoluteFill}
          ></BarCodeScanner>
        )}
      </View>
    </View>
  )
}

const styles = (size) =>
  StyleSheet.create({
    scanner: {},
    title: {
      fontFamily: 'title',
    },
    page: {
      backgroundColor: Theme.YELLOW,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cameraView: {
      height: size,
      width: size,
      backgroundColor: 'white',
      height: size,
      borderRadius: size,
      overflow: 'hidden',
      borderWidth: 10,
      borderColor: Theme.BLUE,
      backgroundColor: Theme.BLUE,
    },
  })

export default Camera
