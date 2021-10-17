import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Theme from 'Theme'
import { NavButton, BackIcon } from 'Components'
import { StopButton } from './StopButton'

import Background from './Background'
import { useNav } from 'hooks'
import { Card, Container } from '../../Components'
const Camera = () => {
  const [data, setData] = useState({})
  const [hasPermission, setHasPermission] = useState(null)
  const { to } = useNav()
  const toStop = () => to('Stop', data)

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
    // TODO: Loading page
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    // TODO: Error page
    return <Text>No access to camera</Text>
  }
  return (
    <Container>
      <Card
        style={{
          paddingBottom: 50,
          justifyContent: 'flex-start',
          paddingTop: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: Theme.BLACK,
              flex: 1,
              borderRadius: 400,
              overflow: 'hidden',
              borderWidth: 5,
              borderColor: data.trail ? Theme.BLACK : Theme.BLUE,
              backgroundColor: Theme.BLUE,
              padding: Platform.OS == 'android' ? 125 : 150,
              position: 'absolute',
            }}
          >
            {data.trail ? (
              <StopButton goTo={toStop}></StopButton>
            ) : (
              <BarCodeScanner
                onBarCodeScanned={handleScan}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    backgroundColor: Theme.BLACK,
                    position: 'absolute',
                    height: 443,
                  },
                ]}
              ></BarCodeScanner>
            )}
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            style={{
              fontFamily: 'title',
              fontStyle: 'italic',
              textAlign: 'center',
              fontSize: 20,
              borderWidth: 2,
              borderRadius: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            Point at a Tour Code
          </Text>
        </View>
      </Card>

      <NavButton onPress={() => to('Home')}>
        <BackIcon></BackIcon>
      </NavButton>
    </Container>
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
      overflow: 'hidden',
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
      fontSize: 40,
      marginTop: 20,
      backgroundColor: Theme.WHITE,
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
      borderColor: Theme.BLUE,
      backgroundColor: Theme.BLUE,
      padding: 150,
      position: 'absolute',
    },
  })

export default Camera
