import React from 'react'
import { Platform, View } from 'react-native'
import Theme from '../Theme'

const Container = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Theme.YELLOW,
      }}
    >
      {children}
    </View>
  )
}

export default Container
