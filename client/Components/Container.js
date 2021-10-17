import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Platform, View } from 'react-native'
import Theme from 'Theme'

const Container = ({ children }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Theme.rgba(Theme.TEAL, 1),
      }}
    >
      {children}
    </Animated.View>
  )
}

export default Container
