import React, { useState, useEffect } from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Theme from 'Theme'
import { ProgressBorder } from 'Components'

const PlayButton = ({
  handlePlay,
  handleStop,
  isPlaying,
  expanded,
  progress,
}) => {
  const scale = React.useRef(new Animated.Value(0)).current
  let [bg, setBg] = React.useState('')

  React.useEffect(() => {
    let color = isPlaying ? Theme.BLUE : Theme.BLUE
    if (expanded) {
      setBg(Theme.rgba(color, 0.9))
      Animated.spring(scale, {
        toValue: 1.5,
        useNativeDriver: false,
        friction: 4,
      }).start()
    } else {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
        friction: 4,
      }).start()
      setBg(color)
    }
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
            scale,
          },
        ],
      }}
    >
      <Pressable
        style={{
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={isPlaying ? handleStop : handlePlay}
      >
        <ProgressBorder
          bg={bg}
          isPlaying={isPlaying}
          progress={expanded ? progress : 0}
          borderWidth={expanded ? 3 : 2}
        ></ProgressBorder>
        <FontAwesome5
          style={{ position: 'absolute' }}
          name={isPlaying ? 'stop' : 'play'}
          size={25}
          color={isPlaying ? Theme.NAVY : Theme.NAVY}
        />
      </Pressable>
    </Animated.View>
  )
}

export default PlayButton
