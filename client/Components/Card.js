import React, { useEffect, useRef } from 'react'
import { View, Platform, Animated, Easing } from 'react-native'
import Theme from '../Theme'

const Card = ({ children }) => {
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
      style={[
        {
          flex: 1,
          borderWidth: 5,
          borderRadius: 20,
          backgroundColor: Theme.WHITE,
          minHeight: 200,
          margin: 30,
          marginBottom: 50,
          overflow: 'hidden',
          maxWidth: 375,
          opacity,
        },
        Platform.OS == 'web' ? { alignSelf: 'center', width: 400 } : null,
      ]}
    >
      {children}
    </Animated.View>
  )
}

export default Card
