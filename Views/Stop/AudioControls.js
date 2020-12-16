import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { useAudio } from './useAudio'

export const AudioControls = ({ src }) => {
  const theme = useTheme()
  const { pauseSound, playSound, isPlaying = true } = useAudio(src)

  return (
    <View style={{ alignItems: 'center' }}>
      {isPlaying ? (
        <Pressable onPress={pauseSound}>
          <AntDesign
            name='pausecircleo'
            size={48}
            color={theme.colors.yellow}
          />
        </Pressable>
      ) : (
        <Pressable onPress={playSound}>
          <FontAwesome name='play-circle' size={48} color={theme.colors.navy} />
        </Pressable>
      )}
    </View>
  )
}
