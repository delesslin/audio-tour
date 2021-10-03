import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Background = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'stretch', overflow: 'hidden', borderRadius: 15 },
      ]}
    >
      <Image
        source={require('./background.png')}
        style={{ flex: 1, width: 425, left: -35 }}
      />
    </View>
  )
}

export default Background
