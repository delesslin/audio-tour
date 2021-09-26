import React from 'react'
import { Text, StyleSheet, View, Pressable, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Theme from '../../Theme'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import hexRgb from 'hex-rgb'
function StopText({ data, expanded, onPress }) {
  let teal = hexRgb(Theme.TEAL)
  let white = hexRgb(Theme.WHITE)
  // TODO: Style expanded view text
  if (expanded) {
    return (
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'absolute',
          bottom: 75,
        }}
      >
        <Pressable
          style={{
            backgroundColor: `rgba(${white.red}, ${white.green}, ${white.blue}, 0.90)`,
            padding: 5,
            borderRadius: 40,
            borderWidth: 3,
            flexDirection: 'row',
          }}
          onPress={onPress}
        >
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: Platform.OS == 'android' ? 14 : 18,
              margin: 10,
            }}
          >
            {data.text.slice(0, 25)}...
          </Text>
          <View
            style={{
              borderRadius: 100,
              padding: 20,
              alignSelf: 'center',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `rgba(${teal.red}, ${teal.green}, ${teal.blue}, 0.85)`,
            }}
          >
            <Feather
              style={{ position: 'absolute' }}
              name={'maximize-2'}
              size={20}
              color='black'
            />
          </View>
        </Pressable>
      </View>
    )
  }
  return (
    <ScrollView style={styles.text}>
      <Text style={styles.transcript}>{data.text}</Text>
      <Text style={styles.narrator}>Narrator: {data.narrator}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    paddingHorizontal: 20,

    marginTop: Platform.OS == 'android' ? 40 : 50,
    // TODO: marginBottom here or in .narrator ? ask alex
    marginBottom: 60,
  },
  transcript: {
    fontSize: Platform.OS == 'android' ? 15 : 20,
    fontFamily: 'text',
    textAlign: 'justify',
  },
  narrator: {
    paddingTop: 20,
    fontStyle: 'italic',
    fontFamily: 'text',
    // marginBottom: 70,
  },
})

export default StopText
