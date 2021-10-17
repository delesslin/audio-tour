import React from 'react'
import { Text, View, Pressable, Platform, Animated } from 'react-native'
import Theme from 'Theme'
import { Feather } from '@expo/vector-icons'

function StopText({ transcript, narrator, expanded, onPress }) {
  let text = transcript.replace(/\r\n\r\n/g, '\r\n')
  const bottom = React.useRef(new Animated.Value(75)).current
  React.useEffect(() => {
    bottom.setValue(0)
    Animated.spring(bottom, {
      useNativeDriver: false,
      bounciness: 15,
      toValue: 75,
    }).start()
  }, [expanded])

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
            backgroundColor: Theme.rgba(Theme.WHITE, 0.9),
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
              backgroundColor: Theme.rgba(Theme.YELLOW, 0.9),
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

export default StopText
