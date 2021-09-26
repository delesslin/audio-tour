import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import theme from '../../Theme'
import CameraButton from './CameraButton'
import Controls from './Controls'
import Logo from './Logo'

import Title from '../Stop/Title'
import Container from '../../Components/Container'
import Card from '../../Components/Card'
import NavButton from '../../Components/NavButton'
import CardText from '../../Components/CardText'
import useSound from '../../hooks/useSound'
const Home = ({ navigation: { navigate } }) => {
  const { isPlaying, stopSound, playSound, sound } = useSound(
    require('./Welcome.mp3')
  )
  const handleClick = () => {
    console.log('CLICKkk!')
    sound ? stopSound() : null
    navigate('Camera')
  }

  return (
    <Container>
      <Card>
        <Title fontSize={50}>TANAKE</Title>

        <Logo size={200}></Logo>
        <Controls
          isPlaying={isPlaying}
          stopSound={stopSound}
          playSound={playSound}
        ></Controls>
        <CardText>
          Tanake and welcome to the Catawba Audio Tour. Tour codes can be
          unlocked on our mobile app by clicking the camera button below.
          Otherwise use your favorite QR code reader.
        </CardText>
      </Card>
      {Platform.OS == 'web' ? null : (
        <NavButton onPress={handleClick}>
          <CameraButton />
        </NavButton>
      )}
    </Container>
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
