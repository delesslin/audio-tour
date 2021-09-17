import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
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
          margin: 10,
          alignItems: 'center',
        },
      ]}
    >
      {/* <Text style={{ color: theme.colors.navy, fontSize: 20 }}>CCPP </Text> */}
      <Feather name='home' size={24} color={theme.colors.navy} />
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
          margin: 10,
          alignItems: 'center',
        },
      ]}
    >
      {/* <Text style={{ color: theme.colors.navy, fontSize: 20 }}>Camera </Text> */}
      <Ionicons name='md-qr-code' size={24} color={theme.colors.navy} />
      {/* <AntDesign name='camerao' size={24} color={theme.colors.navy} /> */}
    </Pressable>
  )
}
export const Buttons = ({ hideHome = false, hideCamera = false }) => {
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
        marginBottom: 25,
        marginTop: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
      }}
    >
      {hideCamera ? null : <CameraButton onClick={handleCamera} />}
      {hideHome ? null : <HomeButton onClick={handleHome} />}
    </View>
  )
}
