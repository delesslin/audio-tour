import React, { useEffect } from 'react'
import { View, StyleSheet, Pressable, Animated, Easing } from 'react-native'

import Theme from '../Theme'

function NavButton({ onPress, size = 40, color = Theme.RED, children }) {
  let anime = React.useRef(new Animated.Value(0)).current
  let backgroundColor = React.useRef(new Animated.Value(0)).current
  const opacity = React.useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: false,
      duration: 150,
    }).start()
  }, [])
  const handleClick = () => {
    Animated.sequence([
      Animated.spring(anime, {
        toValue: 1,
        useNativeDriver: false,

        speed: 20,
      }),
    ]).start(() => {
      anime.setValue(0)
      onPress()
      Animated.timing(backgroundColor, {
        toValue: 0,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.bounce,
      }).start()
    })
  }
  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(anime, {
        toValue: -1,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColor, {
        toValue: 1,
        useNativeDriver: false,
        duration: 100,
        easing: Easing.bounce,
      }),
    ]).start()
  }
  return (
    <Animated.View
      style={[
        {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          alignSelf: 'center',
          borderWidth: 5,
          borderColor: Theme.BLACK,
          bottom: 10,
          position: 'absolute',
          borderRadius: size * 2,
          overflow: 'hidden',
          opacity,
          backgroundColor: backgroundColor.interpolate({
            inputRange: [0, 1],
            outputRange: [Theme.rgba(color, 1), Theme.rgba(Theme.YELLOW, 1)],
          }),
          transform: [
            {
              scale: anime.interpolate({
                inputRange: [-1, 1],
                outputRange: [0.9, 1.1],
              }),
            },
          ],
        },
      ]}
    >
      <Pressable
        title='Home'
        onPressOut={handleClick}
        onPressIn={handlePressIn}
        style={{
          padding: size,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        {children}
      </Pressable>
    </Animated.View>
  )
}

export default NavButton
