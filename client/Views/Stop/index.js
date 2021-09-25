import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import Theme from '../../Theme'
import HomeButton from '../../Components/HomeButton'
import data from './exampleData'
import StopText from './StopText'
import PlayButton from './PlayButton'
import { ExpandButton } from './ExpandButton'
import StopImage from './StopImage'
import Title from './Title'
const getData = ({ trail, slug }) => {
  return data[trail].filter((entry) => entry.slug == slug)
}

const Stop = ({ route, navigation: { navigate } }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [data, setData] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => setExpanded(!expanded)
  useEffect(() => {
    let entry = getData({ trail, slug })
    if (entry.length < 1) return
    setData(entry[0])
  }, [])

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
        {expanded ? null : <Title title={data.title}></Title>}
        <StopImage expanded={expanded} image={data.image}></StopImage>
        {expanded ? (
          <Title expanded={expanded} title={data.title}></Title>
        ) : null}
        <PlayButton />
        <ExpandButton expanded={expanded} onPress={toggleExpand}></ExpandButton>
        <StopText
          onPress={toggleExpand}
          expanded={expanded}
          data={data}
        ></StopText>
      </View>
      <HomeButton navigate={navigate}></HomeButton>
    </View>
  )
}
export const styles = StyleSheet.create({
  // TODO: refactor to share with Home & Camera as applicable
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.YELLOW,
  },
  card: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: Theme.WHITE,
    minHeight: 200,
    margin: 30,
    marginBottom: 50,
    overflow: 'hidden',
  },
})
export default Stop
