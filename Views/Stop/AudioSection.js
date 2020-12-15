import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Pressable, Text, View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { Audio } from 'expo-av'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import data from '../../assets/data'
const useAudio = (src) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = async () => {
    console.log('Playing Sound')
    if (sound != null) {
      setIsPlaying(true)
      await sound.playAsync()
    }
  }
  const pauseSound = async () => {
    if (sound != null) {
      setIsPlaying(false)
      await sound.pauseAsync()
    }
  }

  useEffect(() => {
    Audio.Sound.createAsync(src).then(({ sound }) => setSound(sound))

    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [src])
  return { playSound, pauseSound, isPlaying }
}
const AudioControls = ({ src }) => {
  const theme = useTheme()
  const { pauseSound, playSound, isPlaying = true } = useAudio(src)

  return (
    <View style={{ alignItems: 'center' }}>
      {isPlaying ? (
        <Pressable onPress={pauseSound}>
          <AntDesign
            name='pausecircleo'
            size={48}
            color={theme.colors.yellow}
          />
        </Pressable>
      ) : (
        <Pressable onPress={playSound}>
          <FontAwesome name='play-circle' size={48} color={theme.colors.navy} />
        </Pressable>
      )}
    </View>
  )
}

const AudioSection = ({ img, color = 'red', title }) => {
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
        source={{ uri: img }}
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
        <AudioControls src={data[0].audio[0]} />
      </ImageBackground>
    </View>
  )
}

export default AudioSection
