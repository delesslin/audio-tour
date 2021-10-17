import React, { useState, useEffect } from 'react'
import { Animated, Easing, Pressable, View } from 'react-native'

import Theme from 'Theme'
import { useAnimated, useAsyncEffect, useInterval } from '../hooks'

function ProgressBorder({
  bg = Theme.TEAL,
  progress: percent,
  isPlaying = false,
  size = 60,
  borderWidth = 2,
  progressColor = Theme.YELLOW,
}) {
  const [progress, setProgress] = useState(0)

  useInterval(() => {
    if (isPlaying) {
      setProgress(percent)
    } else if (progress > 0) {
      setProgress((pg) => {
        let newPg = pg - 0.08
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
            borderRadius: size / 2,
            position: 'absolute',
            width: size,
            height: size,
            borderWidth,
            backgroundColor: bg,
            // borderColor: Theme.BLACK,
            borderRightColor: progressColor,
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
            width: size,
            height: size,

            borderRadius: size / 2,
            borderWidth,
            borderBottomColor: Theme.rgba(
              progressColor,
              progress > 0.25 ? 1 : 0
            ),
            borderLeftColor: Theme.rgba(progressColor, progress > 0.5 ? 1 : 0),
            borderTopColor: Theme.rgba(
              progress > 0.5 ? progressColor : Theme.BLACK,
              progress > 0.5 && progress < 0.75 ? 0 : 1
            ),
            borderRightColor: Theme.rgba(
              progress > 0.5 ? progressColor : Theme.BLACK,
              progress > 0.5 ? 0 : 1
            ),
            borderRightColor: Theme.rgba(Theme.BLACK, progress > 0.75 ? 0 : 1),
          },
        ]}
      ></Animated.View>
    </View>
  )
}

export default ProgressBorder
