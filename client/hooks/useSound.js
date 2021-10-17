import React from 'react'
import { Audio } from 'expo-av'
import { useInterval } from '.'

const useSound = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
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
      if (status.isLoaded && status.isPlaying) {
        let ratio = status.positionMillis / status.durationMillis

        setProgress(ratio)
      }
      if (status.didJustFinish === true) {
        // audio has finished!
        await stopSound()
      }
    })
  }

  async function loadSound(audioObj) {
    // TODO: move to top-leve Provider
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    })
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
    progress,
  }
}

export default useSound
