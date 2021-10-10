import React, { useRef, useEffect } from 'react'
import { Image, Animated, Easing } from 'react-native'
import Theme from 'Theme'

function Logo({ src = require('./Logo.png'), size = 100, children }) {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: false,
      duration: 150,
    }).start()
  }, [])
  return (
    <Animated.View
      style={{
        borderRadius: 125,
        overflow: 'hidden',
        backgroundColor: Theme.NAVY,
        alignSelf: 'center',
        padding: 125,
        borderWidth: 3,
        borderColor: Theme.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
      }}
    >
      <Image
        style={{
          height: size,
          width: size,
          position: 'absolute',
        }}
        source={src}
      ></Image>

      {children}
    </Animated.View>
  )
}

export default Logo
