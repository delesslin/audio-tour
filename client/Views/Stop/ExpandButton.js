import React from 'react'
import { View, Pressable } from 'react-native'
import Theme from '../../Theme'
import { Feather } from '@expo/vector-icons'
let getRadian = (deg) => deg * (Math.PI / 180)
let getX = (deg, r) => r * Math.cos(getRadian(deg))
let getY = (deg, r) => r * Math.sin(getRadian(deg))

export function ExpandButton({
  onPress,
  size = 25,
  imgSize = 125,
  expanded = false,
}) {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: expanded ? 'flex-end' : 'center',
        top: expanded ? 10 : size + imgSize - getY(45, imgSize) + 20,
        right: expanded ? 10 : getX(45, imgSize) - size * 2 + 20,
      }}
    >
      <Pressable
        style={{
          padding: size,
          borderWidth: 2,
          backgroundColor: expanded ? Theme.RED : Theme.YELLOW,
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
    </View>
  )
}
