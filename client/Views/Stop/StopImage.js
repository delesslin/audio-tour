import React, { useState, useRef } from 'react'
import { View, Image, StyleSheet, Animated } from 'react-native'
import Theme from 'Theme'
// TODO: handle image loading maybe using <Image onLoad={() => handleLoad}
const degToRad = (deg) => deg * (Math.PI / 180)
const LoadingImage = ({ size = 125 }) => {
  // const rotateZ = useRef(new Animated.Value(degToRad(0))).current
  // const scale = useRef(new Animated.Value(1)).current
  // useEffect(() => {
  //   const useNativeDriver = false
  //   const duration = 2000
  //   const easing = Easing.bounce
  //   Animated.loop(
  //     Animated.parallel([
  //       Animated.sequence([
  //         Animated.timing(rotateZ, {
  //           toValue: degToRad(360),
  //           easing,
  //           duration: duration,
  //           useNativeDriver,
  //         }),
  //         Animated.timing(rotateZ, {
  //           toValue: degToRad(360 * 2),
  //           easing,
  //           duration: duration,
  //           useNativeDriver,
  //         }),
  //       ]),
  //       Animated.sequence([
  //         Animated.timing(scale, {
  //           toValue: 2,
  //           easing,
  //           duration,
  //           useNativeDriver,
  //         }),
  //         Animated.timing(scale, {
  //           toValue: 1,
  //           easing,
  //           duration: duration / 2,
  //           useNativeDriver,
  //         }),
  //       ]),
  //       // Animated.timing(rotateZ, {
  //       //   toValue: degToRad(0),
  //       //   easing,
  //       //   duration,
  //       //   useNativeDriver,
  //       // }),
  //     ])
  //   ).start()
  // }, [])
  return (
    <View
      style={{
        backgroundColor: Theme.TEAL,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Animated.View
        style={{
          backgroundColor: Theme.YELLOW,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          height: size,
          width: size,
          borderRadius: size,

          transform: [
            {
              rotateZ,
            },
            {
              scale,
            },
          ],
        }}
      >
        <Image
          source={require('./Error/acorn.png')}
          style={{ position: 'absolute', height: size / 2, width: size / 2 }}
        ></Image>
      </Animated.View> */}
    </View>
  )
}
function StopImage({ image, expanded = false }) {
  const [isLoading, setIsLoading] = useState(true)
  let opacity = useRef(new Animated.Value(0)).current
  const handleLoad = () => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: false,
    }).start()
    setIsLoading(false)
  }
  return (
    <View style={expanded ? styles.fullscreenImage : styles.image}>
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <Image
          source={{
            uri: image,
          }}
          onError={console.error}
          onLoad={handleLoad}
          style={[
            StyleSheet.absoluteFill,
            {
              position: 'absolute',
              alignItems: 'center',
            },
          ]}
        ></Image>
      </Animated.View>
      {isLoading ? <LoadingImage /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 125,
    overflow: 'hidden',
    backgroundColor: Theme.TEAL,
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: Theme.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreenImage: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default StopImage
