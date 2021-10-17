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
    if (expanded) {
      Animated.spring(scale, {
        toValue: 1.6,
        useNativeDriver: false,
        friction: 4,
      }).start()
    } else {
      Animated.spring(scale, {
        toValue: 1.2,
        useNativeDriver: false,
        friction: 4,
      }).start()
    }
  }, [expanded, isPlaying])
  return (
    <Animated.View
      style={{
        alignItems: 'center',
        // marginBottom: 20,

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
          bg={
            isPlaying
              ? Theme.rgba(Theme.YELLOW, expanded ? 0.9 : 1)
              : Theme.rgba(Theme.BLUE, expanded ? 0.9 : 1)
          }
          isPlaying={isPlaying}
          progress={expanded ? progress : 0}
          borderWidth={expanded ? 2.5 : 2}
        ></ProgressBorder>
        <FontAwesome5
          style={{ position: 'absolute' }}
          name={isPlaying ? 'stop' : 'play'}
          size={25}
          color={Theme.BLACK}
        />
      </Pressable>
    </Animated.View>
  )
}

export default PlayButton
