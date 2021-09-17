import * as FileSystem from 'expo-file-system'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import useTheme from '../../hooks/useTheme'
import { AudioControls } from './AudioControls'
const url = `https://catawba-tour.herokuapp.com`
const AudioSection = ({ img, color = 'teal', title, audio }) => {
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
        // source={{ uri: `${url}/api/image/${img}` }}
        source={{ uri: FileSystem.documentDirectory + `/image/${img}` }}
        imageStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
        style={{
          flex: 1,
          padding: 15,
          justifyContent: 'center',
        }}
      >
        <AudioControls src={FileSystem.documentDirectory + `/audio/${audio}`} />
      </ImageBackground>
      <Text
        style={{
          backgroundColor: theme.colors[color],
          padding: 5,
          paddingHorizontal: 10,
          alignSelf: 'center',
          fontSize: 17,
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default AudioSection
