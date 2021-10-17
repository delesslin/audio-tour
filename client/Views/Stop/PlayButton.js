import React, { useState, useEffect } from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Theme from 'Theme'
import { useAnimated, useAsyncEffect, useInterval } from '../../hooks'

function ProgressBorder({ bg, progress: percent, isPlaying }) {
  const [progress, setProgress] = useState(percent)

  useInterval(() => {
    if (isPlaying) {
      console.log(progress)
      setProgress(percent)
    } else if (progress > 0) {
      setProgress((pg) => {
        let newPg = pg - 0.05
        if (newPg < 0) {
          return 0
        }
        return newPg
      })
    }
  }, 100)

  return (
    <View style={{ transform: [{ rotateZ: '45deg' }] }}>
      <Animated.View
        style={[
          {
            borderRadius: 30,
            position: 'absolute',
            width: 60,
            height: 60,
            borderWidth: 2,
            backgroundColor: bg,
            // borderColor: Theme.BLACK,
            borderRightColor: Theme.YELLOW,
            transform: [
              {
                rotateZ: `${progress * 360}deg`,
              },
            ],
          },
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          {
            width: 60,
            height: 60,

            borderRadius: 30,
            borderWidth: 2,
            borderBottomColor: Theme.rgba(
              Theme.YELLOW,
              progress > 0.25 ? 1 : 0
            ),
            borderLeftColor: Theme.rgba(Theme.YELLOW, progress > 0.5 ? 1 : 0),
            borderTopColor: Theme.rgba(
              progress > 0.5 ? Theme.YELLOW : Theme.BLACK,
              progress > 0.5 && progress < 0.75 ? 0 : 1
            ),
            borderRightColor: Theme.rgba(
              progress > 0.5 ? Theme.YELLOW : Theme.BLACK,
              progress > 0.5 ? 0 : 1
            ),
            borderRightColor: Theme.rgba(Theme.BLACK, progress > 0.75 ? 0 : 1),
          },
        ]}
      ></Animated.View>
    </View>
  )
}

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
          progress={progress}
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
