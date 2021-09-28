import React, { useState } from 'react'
import { View, Text } from 'react-native'
import NavButton from '../../Components/NavButton'
import data from './exampleData'
import StopText from './StopText'
import PlayButton from './PlayButton'
import { ExpandButton } from './ExpandButton'
import StopImage from './StopImage'
import Title from './Title'
import Container from '../../Components/Container'
import Card from '../../Components/Card'
import BackIcon from '../../Components/BackIcon'
import { useData } from './useData'

const Stop = ({ route, navigation: { navigate } }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [expanded, setExpanded] = useState(false)
  const { data } = useData({ trail, slug })
  const toggleExpand = () => setExpanded(!expanded)

  if (!data) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    )
  }
  return (
    <Container>
      <Card>
        {expanded ? null : <Title>{data.title}</Title>}
        <StopImage expanded={expanded} image={data.image}></StopImage>
        {expanded ? <Title expanded={expanded}>{data.title}</Title> : null}
        <PlayButton audio={data.audio} expanded={expanded} />
        <ExpandButton expanded={expanded} onPress={toggleExpand}></ExpandButton>
        <StopText
          onPress={toggleExpand}
          expanded={expanded}
          data={data}
        ></StopText>
      </Card>

      <NavButton onPress={() => navigate('Home')}>
        <BackIcon></BackIcon>
      </NavButton>
    </Container>
  )
}

export default Stop
