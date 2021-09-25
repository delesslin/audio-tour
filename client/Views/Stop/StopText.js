import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Theme from '../../Theme'

function StopText({ data, expanded, onPress }) {
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
            backgroundColor: Theme.WHITE,
            padding: 15,
            borderRadius: 40,
            borderWidth: 5,
          }}
          onPress={onPress}
        >
          <Text style={{ fontStyle: 'italic' }}>
            {data.text.slice(0, 40)}...
          </Text>
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
    paddingLeft: 20,
    paddingRight: 20,

    marginTop: 30,
    // TODO: marginBottom here or in .narrator ? ask alex
    marginBottom: 70,
  },
  transcript: {
    fontSize: Platform.OS == 'android' ? 15 : 20,
    fontFamily: 'text',
  },
  narrator: {
    paddingTop: 20,
    fontStyle: 'italic',
    fontFamily: 'text',
    // marginBottom: 70,
  },
})

export default StopText
