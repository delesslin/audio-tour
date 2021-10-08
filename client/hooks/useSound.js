import React from 'react'
import { Audio } from 'expo-av'

const useSound = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState()

  async function stopSound() {
    if (sound) {
      await sound.stopAsync()
      setIsPlaying(false)
    }
  }
  async function playSound() {
    await sound.playAsync()
    setIsPlaying(true)
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish === true) {
        // audio has finished!
        await stopSound()
      }
    })
  }
  async function loadSound(audioObj) {
    const { sound } = await Audio.Sound.createAsync(audioObj)
    setSound(sound)
    setIsLoading(false)
  }
  async function unloadSound() {
    await sound.unloadAsync()
  }

  return {
    stopSound,
    playSound,
    loadSound,
    unloadSound,
    isPlaying,
    isLoading,
  }
}

export default useSound
