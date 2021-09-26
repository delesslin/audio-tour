import React from 'react'
import { View, Platform } from 'react-native'
import Theme from '../Theme'

const Card = ({ children }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          borderWidth: 5,
          borderRadius: 20,
          backgroundColor: Theme.WHITE,
          minHeight: 200,
          margin: 30,
          marginBottom: 50,
          overflow: 'hidden',
          maxWidth: 400,
        },
        Platform.OS == 'web' ? { alignSelf: 'center', width: 400 } : null,
      ]}
    >
      {children}
    </View>
  )
}

export default Card
