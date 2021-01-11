import React from 'react'
import { Image, Text, View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import Panel from '../Panel'
import logo from '../../static/icon.png'

const Home = () => {
  const theme = useTheme()
  return (
    <Panel color='navy'>
      <View
        style={{
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 48, color: theme.colors.white, flex: 1 }}>
          Tanake!
        </Text>
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </View>
    </Panel>
  )
}

export default Home
