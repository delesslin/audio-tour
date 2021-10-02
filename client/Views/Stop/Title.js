import hexRgb from 'hex-rgb'
import React from 'react'
import { Animated, Platform, Text, View } from 'react-native'
import Theme from '../../Theme'
function Title({ children, expanded = false, fontSize = 30 }) {
  let animeValue = React.useRef(new Animated.Value(0)).current
  let fs = Platform.OS == 'android' ? fontSize - 3 : fontSize
  React.useEffect(() => {
    Animated.spring(animeValue, {
      toValue: expanded ? 1 : 0,
      useNativeDriver: false,
    }).start()
  }, [])
  return (
    <Animated.View
      style={{
        // backgroundColor: animeValue.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: [
        //     'rgba(0,0,0,0)',
        //     expanded ? Theme.rgba(Theme.BLUE, 0.9) : Theme.rgba(Theme.WHITE, 1),
        //   ],
        // }),
        backgroundColor: expanded
          ? Theme.rgba(Theme.TEAL, 0.9)
          : Theme.rgba(Theme.WHITE, 1),
        alignSelf: expanded ? 'flex-start' : 'center',
        padding: 2,
        paddingHorizontal: 40,
        borderRadius: 30,
        margin: 10,
        borderWidth: expanded ? 3 : 0,
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
