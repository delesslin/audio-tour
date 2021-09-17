import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'

// TODO: setIsPlaying to false once playback is finished
export const useAudio = (src) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [percent, setPercent] = useState(0)
  const [completed, setCompleted] = useState(false)

  const playSound = async () => {
    console.log('Playing Sound')
    if (sound != null) {
      setIsPlaying(true)
      let { isPlaying } = await sound.playAsync()
      setIsPlaying(isPlaying)
    }
  }
  const pauseSound = async () => {
    if (sound != null) {
      setIsPlaying(false)
      await sound.pauseAsync()
    }
  }

  useEffect(() => {
    const asyncFn = async () => {
      await Audio.Sound.createAsync({ uri: src }).then(({ sound }) =>
        setSound(sound)
      )
    }
    asyncFn()
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [src])
  return { playSound, pauseSound, isPlaying }
}
