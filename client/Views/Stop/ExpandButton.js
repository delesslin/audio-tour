import React, { useEffect } from 'react'
import { View, Pressable, Platform, Animated } from 'react-native'
import Theme from '../../Theme'
import { Feather } from '@expo/vector-icons'
let getRadian = (deg) => deg * (Math.PI / 180)
let getX = (deg, r) => r * Math.cos(getRadian(deg))
let getY = (deg, r) => r * Math.sin(getRadian(deg))
// TODO: implement alpha on expanded
export function ExpandButton({
  onPress,
  size = 25,
  imgSize = 125,
  expanded = false,
}) {
  let anime = React.useRef(new Animated.Value(0)).current
  let center = size * 2 + imgSize
  useEffect(() => {
    Animated.spring(anime, {
      toValue: expanded ? 1 : 0,
      useNativeDriver: false,
      friction: 4,
    }).start()
  }, [expanded])
  let expandedTop = center - getY(45, imgSize + size)
  let expandedRight = getX(45, imgSize - size * 2)
  return (
    <Animated.View
      style={{
        // backgroundColor: 'red',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: expanded ? 'flex-end' : 'center',
        top: anime.interpolate({
          inputRange: [0, 1],
          outputRange: [expandedTop, 10],
        }),
        right: anime.interpolate({
          inputRange: [0, 1],
          outputRange: [expandedRight, 10],
        }),
      }}
    >
      <Pressable
        style={{
          padding: size,
          borderWidth: 2,
          backgroundColor: expanded
            ? Theme.rgba(Theme.YELLOW, 0.9)
            : Theme.YELLOW,
          borderRadius: size * 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}
      >
        <Feather
          style={{ position: 'absolute' }}
          name={expanded ? 'minimize-2' : 'maximize-2'}
          size={24}
          color='black'
        />
      </Pressable>
    </Animated.View>
  )
}
