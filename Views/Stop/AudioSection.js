import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import useTheme from '../../hooks/useTheme'
import { AudioControls } from './AudioControls'
const AudioSection = ({ img, color = 'red', title, audio }) => {
  const theme = useTheme()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors[color],
        borderRadius: 25,
      }}
    >
      <ImageBackground
        source={img}
        imageStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
        style={{
          flex: 1,
          padding: 15,
        }}
      >
        <Text
          style={{
            backgroundColor: theme.colors[color],
            padding: 5,
            paddingHorizontal: 10,
            borderRadius: 25,
            alignSelf: 'flex-start',
            elevation: 2,
            fontSize: 17,
          }}
        >
          {title}
        </Text>
        <AudioControls src={audio} />
      </ImageBackground>
    </View>
  )
}

export default AudioSection
