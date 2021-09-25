import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import theme from '../../Theme'
import CameraButton from './CameraButton'
import Logo from './Logo'

const Home = ({ navigation: { navigate } }) => {
  const handleClick = () => {
    console.log('CLICKkk!')
    navigate('Camera')
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tanake!</Text>

        <Logo size={200}></Logo>
        <View style={styles.textView}>
          <Text
            textBreakStrategy='simple'
            adjustsFontSizeToFit={true}
            style={styles.text}
          >
            Tanake and welcome to the Catawba Audio Tour. Tour codes can be
            unlocked on our mobile app by clicking the camera button below.
            Otherwise use your favorite QR code reader.
          </Text>
        </View>
        {/* Refactor to use like HomeButton */}
        <CameraButton onPress={handleClick} />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: theme.YELLOW,
    padding: 30,
  },
  card: {
    flex: 1,
    backgroundColor: theme.WHITE,
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: theme.BLACK,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  title: {
    flex: 1,
    fontFamily: theme.FONT_TITLE,
    fontSize: 50,

    textAlign: 'center',
    paddingBottom: 10,
  },
  text: {
    fontSize: Platform.OS == 'android' ? 15 : 19,
    textAlign: 'justify',
    fontFamily: 'text',
  },
  textView: {
    flex: Platform.OS == 'android' ? 1.5 : 2,
  },
})

export default Home
