import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { ProgressButton } from './ProgressButton'
import { FontAwesome } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system'
import { Audio } from 'expo-av'
const useAudio = () => {
  const [playing, setPlaying] = useState(false)
  const [clip, setClip] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log('Loading Sound')
    Audio.Sound.createAsync({
      uri: FileSystem.documentDirectory + '/audio/welcome.mp3',
    })
      .then(({ sound }) => {
        setClip(sound)
        setLoading(true)
      })
      .catch(console.error)
    // return () => clip.unloadAsync()
  }, [])
  const play = () => {
    setPlaying(true)
    const interval = setInterval(() => {
      let decimal = clip
        .getStatusAsync()
        .then(({ positionMillis, durationMillis }) => {
          return positionMillis / durationMillis
        })
      if (decimal == 1) {
        console.log('stop!')
        clearInterval(interval)
        setPlaying(false)
      }
    }, 1000)
  }

  return { playing, loading, play }
}
const AudioButton = ({}) => {
  const theme = useTheme()
  const { playing, play } = useAudio()
  const grey = '#555555'
  return (
    <ProgressButton
      buttonSize={120}
      thickness={8}
      percent={9}
      progressBorder={theme.colors.teal}
      backgroundBorder={playing ? grey : theme.colors.navy}
      handleClick={play}
    >
      <FontAwesome
        name='play'
        size={24}
        color={playing ? grey : theme.colors.navy}
      />
    </ProgressButton>
  )
}

export default AudioButton
