import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Theme from '../../Theme'
function StopImage({ image, expanded }) {
  return (
    <View style={expanded ? styles.fullscreenImage : styles.image}>
      <Image
        source={{
          uri: image,
        }}
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'absolute',
            alignItems: 'center',
          },
        ]}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 125,
    overflow: 'hidden',
    backgroundColor: Theme.TEAL,
    alignSelf: 'center',
    padding: 125,
    borderWidth: 3,
    borderColor: Theme.BLACK,
  },
  fullscreenImage: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default StopImage
