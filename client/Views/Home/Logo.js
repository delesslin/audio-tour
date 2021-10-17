import React, { useRef, useEffect } from 'react'
import { Image, Animated, Easing, View } from 'react-native'
import Theme from 'Theme'
import { ProgressBorder } from '../../Components'

function Logo({
  src = require('./Logo.png'),
  size = 100,
  children,
  progress = 0.5,
  isPlaying,
}) {
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
      <View style={{ position: 'absolute' }}>
        <ProgressBorder
          size={250}
          borderWidth={4}
          isPlaying={isPlaying}
          progress={progress}
          bg={Theme.rgba(Theme.WHITE, 0)}
        />
      </View>
      {children}
    </Animated.View>
  )
}

export default Logo
