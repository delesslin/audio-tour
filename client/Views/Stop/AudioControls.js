import { AntDesign, FontAwesome } from '@expo/vector-icons'

import React from 'react'
import { Pressable, View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { useAudio } from './useAudio'

export const AudioControls = ({ src }) => {
  const theme = useTheme()
  const { pauseSound, playSound, isPlaying = true } = useAudio(src)

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isPlaying ? (
        <Pressable
          onPress={pauseSound}
          style={{
            borderRadius: 25,
            width: 50,
            height: 50,
            backgroundColor: theme.colors['teal'],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AntDesign name='pause' size={24} color={theme.colors['yellow']} />
        </Pressable>
      ) : (
        <Pressable
          onPress={playSound}
          style={{
            borderRadius: 25,
            width: 50,
            height: 50,
            backgroundColor: theme.colors['yellow'],
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AntDesign name='caretright' size={24} color={theme.colors['navy']} />
        </Pressable>
      )}
    </View>
  )
}
