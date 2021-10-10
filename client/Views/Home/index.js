import React, { useEffect } from 'react'
import { StyleSheet, Platform } from 'react-native'
import theme from '../../Theme'
import CameraButton from './CameraButton'
import Controls from './Controls'
import Logo from './Logo'
import Title from '../Stop/Title'
import {
  Container,
  Card,
  NavButton,
  DownloadIcon,
  CardText,
} from '../../Components'

import useSound from '../../hooks/useSound'

import AboutButton from './AboutButton'
import useNav from '../../hooks/useNav'

const Home = () => {
  const { isPlaying, stopSound, playSound, isLoading, loadSound, unloadSound } =
    useSound()
  const { to } = useNav()
  useEffect(() => {
    loadSound(require('./Welcome.mp3'))
  }, [])
  const handleClick = () => {
    stopSound().then(() => to('Camera'))
  }

  return (
    <Container>
      <Card>
        <Title fontSize={50}>TANAKE</Title>
        <AboutButton />

        <Logo size={200}></Logo>
        {!isLoading ? (
          <Controls
            isPlaying={isPlaying}
            stopSound={stopSound}
            playSound={playSound}
          ></Controls>
        ) : null}
        <CardText>
          Tanake and welcome to the Catawba Audio Tour. Tour codes can be
          unlocked on our mobile app by clicking the camera button below.
          Otherwise use your favorite QR code reader.
        </CardText>
      </Card>
      {Platform.OS == 'web' ? (
        <NavButton onPress={() => to('Download')}>
          <DownloadIcon />
        </NavButton>
      ) : (
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
