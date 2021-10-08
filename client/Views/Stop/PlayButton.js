import React, { useState } from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Theme from '../../Theme'

// TODO: Animate scale
const PlayButton = ({ handlePlay, handleStop, isPlaying, expanded }) => {
  const anime = React.useRef(new Animated.Value(expanded ? 1 : 0)).current
  let [bg, setBg] = React.useState('')

  React.useEffect(() => {
    Animated.spring(anime, {
      toValue: expanded ? 1 : 0,
      useNativeDriver: false,
      friction: 4,
    }).start()
    let color = isPlaying ? Theme.NAVY : Theme.BLUE
    if (expanded) {
      setBg(Theme.rgba(color, 0.9))
      return
    }
    setBg(color)
  }, [expanded, isPlaying])
  return (
    <Animated.View
      style={{
        alignItems: 'center',
        marginBottom: 20,

        position: 'absolute',
        alignSelf: 'center',
        top: 250 + 40,
        transform: [
          {
            scale: anime.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.75],
            }),
          },
        ],
      }}
    >
      <Pressable
        style={{
          borderRadius: 100,
          padding: 30,
          borderWidth: 2,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bg,
        }}
        onPress={isPlaying ? handleStop : handlePlay}
      >
        <FontAwesome5
          style={{ position: 'absolute' }}
          name={isPlaying ? 'stop' : 'play'}
          size={25}
          color={isPlaying ? Theme.BLUE : Theme.NAVY}
        />
      </Pressable>
    </Animated.View>
  )
}

export default PlayButton
