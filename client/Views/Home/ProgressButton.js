import React from 'react'
import { Pressable, View } from 'react-native'

export const ProgressButton = ({
  percent = 10,
  children,
  buttonSize = 120,
  thickness = 10,
  backgroundBorder = 'black',
  progressBorder = 'blue',
  handleClick,
}) => {
  // IDK why this works but it does
  let deg = (percent / 100) * 360
  let percentProgress = deg - 135
  let background = backgroundBorder
  let percentOffset = (50 / 100) * 360 + 45
  let progressColor = progressBorder
  if (percent > 50) {
    percentOffset = (50 / 100) * 360 - 135
  }

  return (
    <Pressable
      style={{
        borderWidth: thickness,
        borderColor: background,
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={handleClick}
    >
      <View
        style={{
          width: buttonSize,
          height: buttonSize,
          borderWidth: thickness,
          borderRadius: buttonSize / 2,
          position: 'absolute',
          borderLeftColor: 'transparent',
          borderBottomColor: 'transparent',
          borderRightColor: progressColor,
          borderTopColor: progressColor,
          transform: [{ rotateZ: `${percentProgress}deg` }],
        }}
      ></View>
      <View
        style={{
          width: buttonSize,
          height: buttonSize,
          borderWidth: thickness,
          borderRadius: buttonSize / 2,
          borderLeftColor: 'transparent',
          borderBottomColor: 'transparent',
          borderRightColor: percent > 50 ? progressColor : background,
          borderTopColor: percent > 50 ? progressColor : background,
          position: 'absolute',
          transform: [{ rotateZ: `${percentOffset}deg` }],
        }}
      ></View>
      {children}
    </Pressable>
  )
}
