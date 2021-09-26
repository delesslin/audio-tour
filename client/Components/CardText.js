import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, Platform } from 'react-native'
function CardText({ children, narrator }) {
  let fontSize = Platform.OS == 'android' ? 16 : 20
  return (
    <ScrollView
      style={{
        margin: 40,
        marginTop: Platform.OS == 'android' ? 30 : 50,
        marginBottom: 60,
      }}
    >
      <Text
        textBreakStrategy='simple'
        style={{
          fontFamily: 'text',
          fontSize,
          textAlign: 'justify',
        }}
      >
        {children}
      </Text>
      {narrator ? (
        <Text
          style={{
            fontStyle: 'italic',
            fontSize,
            fontFamily: 'text',
            marginTop: 20,
          }}
        >
          Narrator: {narrator}
        </Text>
      ) : null}
    </ScrollView>
  )
}

export default CardText
