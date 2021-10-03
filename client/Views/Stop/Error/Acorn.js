import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Image } from 'react-native'
const degToRad = (deg) => deg * (Math.PI / 180)
const Acorn = ({ size = 65 }) => {
  const animeRotation = useRef(new Animated.Value(degToRad(20))).current
  const animeLocation = useRef(new Animated.Value(-size)).current
  const animeOpacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const duration = 2500
    Animated.parallel([
      Animated.timing(animeRotation, {
        toValue: degToRad(360),
        useNativeDriver: false,
        easing: Easing.bounce,
        duration,
      }),
      Animated.timing(animeLocation, {
        toValue: 25,
        useNativeDriver: false,
        easing: Easing.bounce,
        duration,
      }),
      Animated.spring(animeOpacity, {
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.in,
        duration,
      }),
    ]).start()
  }, [])
  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 25,
        left: animeLocation,
        opacity: animeOpacity,
        transform: [
          {
            rotateZ: animeRotation,
          },
        ],
      }}
    >
      <Image
        style={{ width: size, height: size }}
        source={require('./acorn.png')}
      />
    </Animated.View>
  )
}

export default Acorn
