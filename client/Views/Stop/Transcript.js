import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useTheme from '../../hooks/useTheme'

export const Transcript = ({ transcript }) => {
  const theme = useTheme()
  return (
    <View style={{ flex: 3, borderRadius: 25 }}>
      {/* <Text
        style={{
          margin: 15,
          padding: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
          alignSelf: 'flex-start',
          borderBottomColor: theme.colors.yellow,
          borderBottomWidth: 2,
        }}
      >
        Transcript:
      </Text> */}
      <ScrollView
        style={{
          paddingRight: 15,
          backgroundColor: theme.colors.white,
          margin: 25,
          marginTop: 0,
        }}
      >
        {transcript != null
          ? transcript.map((entry, index) => {
              return (
                <Text style={{ paddingTop: 10 }} key={index}>
                  {entry}
                </Text>
              )
            })
          : null}
      </ScrollView>
    </View>
  )
}
