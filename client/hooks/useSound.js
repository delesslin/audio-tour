import React from 'react'
import { Audio } from 'expo-av'
const useSound = (audioObj) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState()

  async function stopSound() {
    await sound.stopAsync()
    setIsPlaying(false)
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
  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(audioObj)
    setSound(sound)
  }
  async function unloadSound() {
    await stopSound()
    await sound.unloadAsync()
  }
  React.useEffect(() => {
    loadSound()
  }, [])
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])
  return { sound, stopSound, playSound, loadSound, unloadSound, isPlaying }
}

export default useSound
