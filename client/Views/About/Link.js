import React, { useEffect, useRef } from 'react'
import { Text, Animated } from 'react-native'
import Theme from '../../Theme'
import useNav from '../../hooks/useNav'

export const Link = ({ children, href, color = Theme.BLUE }) => {
  const flex = useRef(new Animated.Value(0)).current
  const { href: external } = useNav()
  const handlePress = () => {
    Animated.parallel([
      Animated.spring(flex, {
        useNativeDriver: false,
        toValue: 1,
        bounciness: 15,
      }),
    ]).start(() => {
      external(href).then(() => {
        Animated.delay(500).start(() => {
          flex.setValue(0.5)
        })
      })
    })
  }
  useEffect(() => {
    const bounciness = Math.random() * 10 + 10
    Animated.spring(flex, {
      useNativeDriver: false,
      toValue: 0.3,
      bounciness,
    }).start()
  }, [])

  return (
    <Text
      onPress={handlePress}
      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderRadius: 25,
        overflow: 'hidden',
        padding: 5,
      }}
    >
      <Animated.Text
        style={{
          flex: 0.5,

          backgroundColor: flex.interpolate({
            inputRange: [0, 1],
            outputRange: [Theme.rgba(color, 0), Theme.rgba(color, 1)],
          }),
        }}
      >
        {children}
      </Animated.Text>
    </Text>
  )
}
