import React from 'react'
import { Animated, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Theme from 'Theme'

const PlayButton = ({ handlePlay, handleStop, isPlaying, expanded }) => {
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
          color={isPlaying ? Theme.NAVY : Theme.NAVY}
        />
      </Pressable>
    </Animated.View>
  )
}

export default PlayButton
