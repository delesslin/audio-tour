import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import theme from '../../Theme'
function Controls() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState()
  let togglePlay = () => {
    if (!isPlaying) {
      playSound()
    } else {
      stopSound()
    }
    setIsPlaying(() => !isPlaying)
  }
  async function stopSound() {
    sound.stopAsync()
  }
  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(require('./Welcome.mp3'))
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }
  return (
    <Pressable
      style={[
        styles.play,
        { backgroundColor: !isPlaying ? theme.BLUE : theme.YELLOW },
      ]}
      onPress={togglePlay}
    >
      {isPlaying ? (
        <Ionicons name='md-pause-sharp' size={30} color='black' />
      ) : (
        <Entypo name='controller-play' size={30} color='black' />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  play: {
    backgroundColor: theme.BLUE,
    padding: 10,
    borderRadius: 75,
    borderWidth: 3,
    height: 70,
    width: 70,
    top: -35,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Controls
