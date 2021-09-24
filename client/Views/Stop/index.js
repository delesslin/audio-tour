import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Theme from '../../Theme'
const data = {
  cultural: [
    {
      slug: 'poison-ivy',
      title: 'Poison ivy',
      text: '"Leaves of three, let it be", "Hairy vine? No friend of mine" and other sayings help us remember the name of this important but dangerous plant. Toxicodendron radicans, most commonly known as "Poison Ivy", is a dangerous but important plant. While it causes rashes, itching, and other more serious reactions in humans, many animals such as deer and turkey will happily eat Poison Ivy.',
      narrator: 'Dr. Wenonah Haire',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Toxicodendron_radicans%2C_leaves.jpg/2560px-Toxicodendron_radicans%2C_leaves.jpg',
      Audio:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Lorem_ipsum.ogg',
      date_modified: '01/01/01',
      _id: 'hash',
    },
  ],
}
const getData = ({ trail, slug }) => {
  return data[trail].filter((entry) => entry.slug == slug)
}
const Stop = ({ route, navigation: { navigate } }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [data, setData] = useState(null)
  useEffect(() => {
    let entry = getData({ trail, slug })
    if (entry.length < 1) return
    setData(entry[0])
  }, [])
  const goHome = () => {
    console.log('I want to go home')
    navigate('Home')
  }
  if (!data) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={{ uri: data.image }}
            style={StyleSheet.absoluteFill}
          ></Image>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.text}>
          <Text adjustsFontSizeToFit={true} style={{ padding: 10 }}>
            {data.text}
          </Text>
          <Text style={{ fontStyle: 'italic', paddingLeft: 10 }}>
            Narrator: {data.narrator}
          </Text>
        </View>
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flex: 1,
          },
        ]}
      >
        <Pressable
          title='Home'
          onPress={() => navigate('Home')}
          style={{
            backgroundColor: Theme.RED,
            padding: 20,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}
        >
          <Ionicons name='arrow-back' size={24} color='black' />
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  // TODO: refactor to share with Home & Camera as applicable
  container: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: Theme.YELLOW,
    padding: 40,
  },
  card: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 20,
    overflow: 'hidden',
    minHeight: 200,
  },
  image: {
    minHeight: 200,
  },
  title: {
    backgroundColor: Theme.BLUE,
    padding: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    borderRadius: 30,
    margin: 10,
  },
  text: {
    padding: 10,
  },
})
export default Stop
