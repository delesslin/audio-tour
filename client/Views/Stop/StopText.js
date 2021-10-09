import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Animated,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Theme from '../../Theme'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import hexRgb from 'hex-rgb'
function StopText({ transcript, narrator, expanded, onPress }) {
  let text = transcript.replace(/\r\n\r\n/g, '\r\n')
  let teal = hexRgb(Theme.YELLOW)
  let white = hexRgb(Theme.WHITE)
  const bottom = React.useRef(new Animated.Value(75)).current
  React.useEffect(() => {
    bottom.setValue(0)
    Animated.spring(bottom, {
      useNativeDriver: false,
      bounciness: 15,
      toValue: 75,
    }).start()
  }, [expanded])
  // TODO: Style expanded view text
  console.log(JSON.stringify(text))
  if (expanded) {
    return (
      <Animated.View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'absolute',
          bottom,
          opacity: bottom.interpolate({
            inputRange: [0, 75],
            outputRange: [0, 1],
          }),
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
            {text.slice(0, 25)}...
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
      </Animated.View>
    )
  }
  return (
    <Animated.ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        opacity: bottom.interpolate({
          inputRange: [0, 75],
          outputRange: [0, 1],
        }),
        marginTop: Platform.OS == 'android' ? 40 : 50,
        // TODO: marginBottom here or in .narrator ? ask alex
        marginBottom: 60,
      }}
    >
      <Text
        style={{
          fontSize: Platform.OS == 'android' ? 15 : 20,
          fontFamily: 'text',
          textAlign: 'justify',
        }}
      >
        {text}
      </Text>
      <Text style={{ paddingTop: 20, fontStyle: 'italic', fontFamily: 'text' }}>
        Narrator: {narrator}
      </Text>
    </Animated.ScrollView>
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
  transcript: {},
  narrator: {
    paddingTop: 20,
    fontStyle: 'italic',
    fontFamily: 'text',
    // marginBottom: 70,
  },
})

export default StopText
