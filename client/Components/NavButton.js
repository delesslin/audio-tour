import React, { useEffect } from 'react'
import { View, StyleSheet, Pressable, Animated } from 'react-native'

import Theme from '../Theme'

function NavButton({ onPress, size = 40, color = Theme.RED, children }) {
  let anime = React.useRef(new Animated.Value(0)).current

  const handleClick = () => {
    Animated.spring(anime, {
      toValue: 1,
      useNativeDriver: false,

      speed: 20,
    }).start(() => {
      anime.setValue(0)
      onPress()
    })
  }
  const handlePressIn = () => {
    Animated.spring(anime, {
      toValue: -1,
      useNativeDriver: false,
    }).start()
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
          backgroundColor: color,
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
