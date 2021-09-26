import React from 'react'
import { Pressable, View } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'

import theme from '../../Theme'
import Theme from '../../Theme'
// TODO: WHY is this not stopping on navigate? maybe just implement the Play component from Stop?
function Controls({ isPlaying, stopSound, playSound }) {
  return (
    <View
      style={{
        position: 'absolute',

        alignSelf: 'center',
        top: 300 + 50 - 30,
      }}
    >
      <Pressable
        style={{
          backgroundColor: isPlaying ? theme.YELLOW : theme.BLUE,
          padding: 30,
          borderRadius: 75,
          borderWidth: 3,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={isPlaying ? stopSound : playSound}
      >
        {isPlaying ? (
          <Ionicons
            style={{ position: 'absolute' }}
            name='md-pause-sharp'
            size={30}
            color='black'
          />
        ) : (
          <Entypo
            style={{ position: 'absolute' }}
            name='controller-play'
            size={30}
            color='black'
          />
        )}
      </Pressable>
    </View>
  )
}

export default Controls
