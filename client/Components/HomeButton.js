import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Theme from '../Theme'

function HomeButton({ navigate }) {
  return (
    <View
      style={[
        {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
      ]}
    >
      <Pressable
        title='Home'
        onPress={() => navigate('Home')}
        style={{
          backgroundColor: Theme.RED,
          padding: 40,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 5,
          borderColor: Theme.BLACK,
          alignSelf: 'center',
          top: -100,
          position: 'absolute',
        }}
      >
        <Ionicons
          style={{ position: 'absolute' }}
          name='arrow-back'
          size={50}
          color={Theme.BLACK}
        />
      </Pressable>
    </View>
  )
}

export default HomeButton
