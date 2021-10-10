import React, { useEffect, useRef } from 'react'
import { Animated, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Theme from '../../Theme'
import { useNavigation } from '@react-navigation/native'

function AboutButton({ size = 30, color = Theme.YELLOW }) {
  const bg = useRef(new Animated.Value(0)).current
  const { navigate } = useNavigation()

  const fadeInBG = (cb) => {
    Animated.spring(bg, {
      toValue: 1,
      useNativeDriver: false,
      bounciness: 15,
    }).start(cb)
  }
  const toAbout = () => {
    fadeInBG(() => navigate('About'))
  }
  return (
    <Pressable
      onPress={toAbout}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
      }}
    >
      <Animated.View
        style={{
          borderRadius: size,
          overflow: 'hidden',
          padding: 3,
          opacity: bg.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
          backgroundColor: bg.interpolate({
            inputRange: [0, 1],
            outputRange: [Theme.rgba(color, 0), Theme.rgba(color, 1)],
          }),
        }}
      >
        <Feather name='info' size={size} color={Theme.BLACK} />
      </Animated.View>
    </Pressable>
  )
}

export default AboutButton
