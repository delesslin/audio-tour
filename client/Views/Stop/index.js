import React from 'react'
import { View, Text } from 'react-native'
const data = {
  cultural: [
    {
      slug: 'yehasuri-trail',
      title: 'Yehasuri Trail',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
      Narrator: 'Dr. Wenonah Haire',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Catawba_River%2C_North_Fork%2C_near_Ashford%2C_North_Carolina.jpg/2880px-Catawba_River%2C_North_Fork%2C_near_Ashford%2C_North_Carolina.jpg',
      Audio:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Lorem_ipsum.ogg',
      date_modified: '01/01/01',
      _id: 'hash',
    },
  ],
}
const Stop = ({ route }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{trail}</Text>
      <Text>{slug}</Text>
    </View>
  )
}

export default Stop
