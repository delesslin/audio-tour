import React from 'react'
import {
  Button,
  Platform,
  StyleSheet,
  Pressable,
  Text,
  Image,
  View,
} from 'react-native'
import Theme from '../../Theme'
import { Feather } from '@expo/vector-icons'

const CameraButton = ({ onPress }) => {
  if (Platform.OS == 'web') {
    return null
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Feather name='camera' size={50} color='black' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  button: {
    padding: 0,
    backgroundColor: Theme.TEAL,
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 95,
    borderRadius: 100,
    overflow: 'hidden',
    top: 50,
    borderWidth: 5,
  },
})

export default CameraButton
