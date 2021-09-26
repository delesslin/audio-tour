import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Theme from '../../Theme'

function Logo({ src = require('./Logo.png'), size = 100, children }) {
  return (
    <View
      style={{
        borderRadius: 125,
        overflow: 'hidden',
        backgroundColor: Theme.NAVY,
        alignSelf: 'center',
        padding: 125,
        borderWidth: 3,
        borderColor: Theme.BLACK,
        alignItems: 'center',
        justifyContent: 'center',
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

      {children}
    </View>
  )
}

export default Logo
