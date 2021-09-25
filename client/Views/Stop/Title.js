import React from 'react'
import { Text, View } from 'react-native'
import Theme from '../../Theme'
function Title({ title, expanded }) {
  return (
    <View
      style={{
        backgroundColor: expanded ? Theme.BLUE : Theme.WHITE,
        alignSelf: expanded ? 'flex-start' : 'center',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 30,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'title',
        }}
      >
        {title.toUpperCase()}
      </Text>
    </View>
  )
}

export default Title
