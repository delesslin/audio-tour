import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Theme from '../../Theme'

export function StopButton(props) {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Pressable
        onPress={props.goTo}
        style={[styles.pressable, StyleSheet.absoluteFill]}
      >
        {/* <AntDesign name='find' size={80} color={Theme.BLACK} /> */}
        <AntDesign name='arrowright' size={80} color={Theme.BLACK} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
