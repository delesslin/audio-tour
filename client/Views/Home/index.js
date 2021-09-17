import React, { useEffect, useState } from 'react'
import { Image, Text, View, Pressable } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import Panel from '../Panel'
import logo from '../../static/icon.png'
import useData from '../../hooks/useData'
import AudioButton from './AudioButton'

const Home = ({ navigation }) => {
  const theme = useTheme()
  const data = useData()
  const [welcome, setWelcome] = useState({ description: [] })
  useEffect(() => {
    const i = data.findIndex((entry) => entry.slug === 'welcome')
    if (i < 0) return
    setWelcome(data[i])
  }, [data])
  return (
    <View
      style={{
        margin: 25,
        padding: 25,
        borderRadius: 10,
        backgroundColor: theme.colors.blue,
        alignSelf: 'stretch',
        flex: 8,
        marginBottom: 60,
        alignItems: 'center',
        elevation: 1,
        paddingBottom: 150,
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          color: theme.colors.navy,
          fontSize: 50,
          fontFamily: 'PermanentMarker_400Regular',
        }}
      >
        Tanake!
      </Text>
      <AudioButton buttonSize={150} />
      {welcome.description.map((para, i) => {
        return (
          <Text style={{ margin: 10, textAlign: 'justify' }} key={i}>
            {para}
          </Text>
        )
      })}
      <Pressable
        onPress={() => navigation.navigate('Camera')}
        style={{
          backgroundColor: theme.colors.yellow,
          height: 100,
          width: 100,
          borderRadius: 100 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: -30,
          elevation: 2,
        }}
      >
        <Ionicons name='md-qr-code' size={50} color={theme.colors.navy} />
      </Pressable>
    </View>
  )
  // return (
  //   <Panel color='navy'>
  //     <View
  //       style={{
  //         padding: 15,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flex: 1,
  //       }}
  //     >
  //       <Text style={{ fontSize: 48, color: theme.colors.white, flex: 1 }}>
  //         Tanake!
  //       </Text>
  //       <Image source={logo} style={{ width: 200, height: 200 }} />
  //     </View>
  //   </Panel>
  // )
}

export default Home
