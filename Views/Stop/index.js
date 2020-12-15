import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import useData from '../../hooks/useData'
import Panel from '../Panel'
import data from '../../assets/data'
import { ScrollView } from 'react-native-gesture-handler'
import useTheme from '../../hooks/useTheme'
const example =
  'https://media1.fdncms.com/charleston/imager/u/original/17882354/image_from_page_231_of_-bulletin-_1901_.jpg'
const Stop = ({ route, navigation }) => {
  const theme = useTheme()
  const [{ slug, title, transcript, audio }] = data.filter(({ slug }) => {
    console.log('SLUG!!!!!', slug)
    console.log('ROUTE PARAMS', route.params.data)
    return slug == route.params.data
  })
  // Get and assign data
  return (
    <Panel color='white' style={{ flex: 1 }}>
      <View
        style={{ flex: 1, backgroundColor: theme.colors.red, borderRadius: 25 }}
      >
        <ImageBackground
          source={{ uri: example }}
          imageStyle={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
          style={{
            flex: 1,
            padding: 15,
          }}
        >
          <Text
            style={{
              backgroundColor: theme.colors.yellow,
              padding: 5,
              paddingHorizontal: 10,
              borderRadius: 25,
              alignSelf: 'flex-start',
              elevation: 2,
            }}
          >
            {title}
          </Text>
        </ImageBackground>
      </View>
      <View style={{ flex: 3, borderRadius: 25 }}>
        <ScrollView
          style={{
            paddingRight: 15,

            backgroundColor: theme.colors.white,
            margin: 25,
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
    </Panel>
  )
}

export default Stop
