import React from 'react'
import { Animated, View, StyleSheet, Pressable, Easing } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import Theme from '../../Theme'
import hexRgb from 'hex-rgb'

export function StopButton({ goTo }) {
  const scaleMax = 2
  const scale = React.useRef(new Animated.Value(scaleMax)).current
  const useNativeDriver = true
  const duration = 400
  const backgroundColor = React.useRef(new Animated.Value(0)).current
  const handlePressIn = () => {
    Animated.timing(backgroundColor, {
      useNativeDriver: false,
      toValue: 1,
      duration: 100,
      easing: Easing.ease,
    }).start()
  }
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 1.7,
          useNativeDriver,
          bounciness: 15,
        }),
        Animated.timing(scale, {
          toValue: scaleMax,
          useNativeDriver,
          easing: Easing.bounce,
          duration: 500,
        }),
      ])
    ).start()
  }, [])
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor.interpolate({
            inputRange: [0, 1],
            outputRange: [
              Theme.rgba(Theme.BLUE, 1),
              Theme.rgba(Theme.YELLOW, 1),
            ],
          }),
        },
      ]}
    >
      <Pressable
        onPress={goTo}
        style={[styles.pressable, StyleSheet.absoluteFill]}
        onPressIn={handlePressIn}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale,
              },
            ],
          }}
        >
          <Ionicons name='qr-code' size={80} color={Theme.BLACK} />
        </Animated.View>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
