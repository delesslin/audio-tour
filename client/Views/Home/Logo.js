import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import theme from '../../Theme'

import Controls from './Controls'

function Logo({ size = 100 }) {
  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound')
  //         sound.unloadAsync()
  //       }
  //     : undefined
  // }, [sound])
  return (
    <View style={styles().container}>
      <View style={styles(size).logoView}>
        <Image style={styles(size).logo} source={require('./Logo.png')}></Image>
      </View>
      <Controls></Controls>
    </View>
  )
}

export const styles = (size = 100) =>
  StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
    },
    logoView: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: theme.NAVY,
      borderRadius: size,
      overflow: 'hidden',
    },
    logo: {
      borderRadius: size,
      height: size,
      width: size,
    },
  })

export default Logo
