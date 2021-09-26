import React from 'react'
import { Animated, View, StyleSheet, Pressable } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import Theme from '../../Theme'

export function StopButton({ goTo }) {
  const animationVariable = React.useRef(new Animated.Value(0)).current
  React.useEffect(() => {
    Animated.spring(animationVariable, {
      toValue: 1,
      useNativeDriver: true,
      friction: 2,
    }).start()
  }, [])
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Pressable
        onPress={goTo}
        style={[styles.pressable, StyleSheet.absoluteFill]}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale: animationVariable.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2],
                }),
              },
            ],
          }}
        >
          <Ionicons name='qr-code' size={80} color={Theme.BLACK} />
        </Animated.View>
      </Pressable>
    </View>
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
