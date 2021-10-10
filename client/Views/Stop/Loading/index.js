import React, { useEffect, useRef } from 'react'
import { View, Image, Animated, Easing } from 'react-native'
import { Container } from 'Components'
import Theme from 'Theme'
const Loading = ({ size = 100 }) => {
  const scale = useRef(new Animated.Value(1)).current
  const rotateZ = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const useNativeDriver = false
    const duration = 2000
    const easing = Easing.bounce
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.5,
            easing,
            duration,
            useNativeDriver: false,
          }),
          Animated.timing(scale, {
            toValue: 1,
            easing,
            duration,
            useNativeDriver,
          }),
        ]),
        Animated.sequence([
          Animated.timing(rotateZ, {
            toValue: 360,
            easing,
            duration,
            useNativeDriver,
          }),

          Animated.timing(rotateZ, {
            toValue: 0,
            easing,
            duration,
            useNativeDriver,
          }),
        ]),
      ])
    ).start()
  }, [])
  return (
    <Container>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Animated.View
          style={{
            height: size,
            width: size,
            backgroundColor: Theme.YELLOW,
            borderRadius: size,
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [
              {
                scale,
              },
              {
                rotateZ: rotateZ.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        >
          <Image
            source={require('../Error/acorn.png')}
            style={{ width: size / 2, height: size / 2 }}
          />
        </Animated.View>
      </View>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 500,
            overflow: 'hidden',
          }}
        >
          <Image
            source={require('../Error/acorn.png')}
            style={{
              width: 50,
              height: 50,
            }}
          ></Image>
        </View>
      </View> */}
    </Container>
  )
}

export default Loading
