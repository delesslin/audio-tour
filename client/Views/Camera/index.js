import React, { useState, useEffect } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Theme from '../../Theme'
import NavButton from '../../Components/NavButton'
import { StopButton } from './StopButton'
import BackIcon from '../../Components/BackIcon'
const Camera = ({ navigation }) => {
  const [data, setData] = useState({})
  const [hasPermission, setHasPermission] = useState(null)
  const goTo = () => {
    console.log('To a stop')
    navigation.navigate('Stop', data)
  }
  const handleScan = ({ type, data }) => {
    let host = 'tour.catawbaculture.org'

    if (data.includes(host)) {
      try {
        let [trail, stop] = data.split(host)[1].split('/stop/')[1].split('/')
        setData({ trail, slug: stop })
      } catch (e) {
        if (e) console.error(e)
        return
      }
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
    <View style={styles().container}>
      <View style={styles().card}>
        <Text style={styles().title}>Point at a Tour Code</Text>

        <View style={styles().cameraContainer}>
          <View style={styles(400).cameraView}>
            {data.trail ? (
              <StopButton goTo={goTo}></StopButton>
            ) : (
              <BarCodeScanner
                onBarCodeScanned={handleScan}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: Theme.BLACK, position: 'absolute' },
                ]}
              ></BarCodeScanner>
            )}
          </View>
        </View>
      </View>
      <NavButton onPress={() => navigation.navigate('Home')}>
        <BackIcon></BackIcon>
      </NavButton>
    </View>
  )
}

export const styles = (size) =>
  StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: 'center',
      backgroundColor: Theme.TEAL,
    },
    card: {
      flex: 1,
      borderWidth: 5,
      borderRadius: 20,
      backgroundColor: Theme.WHITE,
      minHeight: 200,
      margin: 20,
      marginBottom: 50,
    },
    title: {
      fontFamily: 'title',
      padding: 10,
      paddingBottom: 0,
      textAlign: 'center',
      fontSize: 30,
    },
    cameraContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
    },
    cameraView: {
      backgroundColor: Theme.BLACK,
      flex: 1,
      borderRadius: size,
      overflow: 'hidden',
      borderWidth: 5,
      borderColor: Theme.BLACK,
      backgroundColor: Theme.BLUE,
      padding: 150,
      position: 'absolute',
    },
  })

export default Camera
