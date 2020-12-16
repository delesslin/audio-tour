import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'

export const useAudio = (src) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = async () => {
    console.log('Playing Sound')
    if (sound != null) {
      setIsPlaying(true)
      await sound.playAsync()
    }
  }
  const pauseSound = async () => {
    if (sound != null) {
      setIsPlaying(false)
      await sound.pauseAsync()
    }
  }

  useEffect(() => {
    Audio.Sound.createAsync(src).then(({ sound }) => setSound(sound))

    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [src])
  return { playSound, pauseSound, isPlaying }
}
