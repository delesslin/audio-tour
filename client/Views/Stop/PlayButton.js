import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Theme from '../../Theme'
const PlayButton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.bttn} onPress={() => console.log('play')}>
        <FontAwesome5
          style={{ position: 'absolute' }}
          name='play'
          size={25}
          color='black'
        />
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,

    position: 'absolute',
    alignSelf: 'center',
    top: 250 + 40,
  },
  bttn: {
    borderRadius: 50,
    padding: 30,
    borderWidth: 3,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.BLUE,
  },
})

export default PlayButton
