import hexRgb from 'hex-rgb'
import React from 'react'
import { Animated, Easing, Platform, Text, View } from 'react-native'
import Theme from '../../Theme'
function Title({ children, expanded, fontSize = 30 }) {
  let animeValue = React.useRef(new Animated.Value(0)).current
  let opacity = React.useRef(new Animated.Value(0)).current
  let left = React.useRef(new Animated.Value(120)).current
  let fs = Platform.OS == 'android' ? fontSize - 3 : fontSize
  React.useEffect(() => {
    const duration = 250
    if (expanded) {
      opacity.setValue(0)
      left.setValue(120)
      Animated.parallel([
        Animated.timing(opacity, {
          useNativeDriver: false,
          toValue: 1,
          duration,
          easing: Easing.exp,
        }),
        Animated.timing(left, {
          useNativeDriver: false,
          toValue: 0,
          duration,
          easing: Easing.linear,
        }),
      ]).start()
    } else {
      opacity.setValue(0)
      left.setValue(0)
      Animated.timing(opacity, {
        useNativeDriver: false,
        toValue: 1,
        duration,
        easing: Easing.exp,
      }).start()
    }
  }, [expanded])
  React.useEffect(() => {
    Animated.spring(animeValue, {
      toValue: expanded ? 1 : 0,
      useNativeDriver: false,
    }).start()
  }, [])
  return (
    <Animated.View
      style={{
        backgroundColor: expanded
          ? Theme.rgba(Theme.TEAL, 0.9)
          : Theme.rgba(Theme.WHITE, 1),
        alignSelf: expanded ? 'flex-start' : 'center',
        padding: 2,
        paddingHorizontal: 40,
        borderRadius: 30,
        margin: 10,
        borderWidth: expanded ? 3 : 0,
        opacity,
        left,
      }}
    >
      <Text
        style={{
          fontSize: expanded ? fs - 5 : fs,
          fontFamily: 'title',
          color: Theme.BLACK,
        }}
      >
        {children.toUpperCase()}
      </Text>
    </Animated.View>
  )
}

export default Title
