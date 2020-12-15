import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useTheme from '../../hooks/useTheme'

const HomeButton = ({ onClick }) => {
  const theme = useTheme()
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: theme.colors.blue,
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 25,
          elevation: 2,
          flex: 1,
          margin: 5,
        },
      ]}
    >
      <Text style={{ color: theme.colors.navy, fontSize: 20 }}>CCPP </Text>
    </Pressable>
  )
}
const CameraButton = ({ handlePress, onClick }) => {
  const theme = useTheme()
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: theme.colors.yellow,
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 25,
          elevation: 2,
          flex: 2,
          margin: 5,
        },
      ]}
    >
      <Text style={{ color: theme.colors.navy, fontSize: 20 }}>Camera </Text>
    </Pressable>
  )
}
export const Buttons = ({ onHome }) => {
  const navigation = useNavigation()
  const handleHome = () => {
    navigation.navigate('Home')
  }
  const handleCamera = () => {
    navigation.navigate('Camera')
  }
  return (
    <View
      style={{
        margin: 5,
        flexDirection: 'row',
      }}
    >
      <CameraButton onClick={handleCamera} />
      <HomeButton onClick={handleHome} />
    </View>
  )
}
