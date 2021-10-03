import React, { useState } from 'react'
import { View, Text } from 'react-native'
import NavButton from '../../Components/NavButton'
// import data from './exxampleData'
import StopText from './StopText'
import PlayButton from './PlayButton'
import { ExpandButton } from './ExpandButton'
import StopImage from './StopImage'
import Title from './Title'
import Container from '../../Components/Container'
import Card from '../../Components/Card'
import BackIcon from '../../Components/BackIcon'
import useData from '../../hooks/useData'
import ErrorView from './Error'
import Loading from './Loading'

const Stop = ({ route, navigation: { navigate } }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [expanded, setExpanded] = useState(false)
  const { stop, loading, error } = useData({ trail, slug })

  const toggleExpand = () => setExpanded(!expanded)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <ErrorView navigate={navigate} />
  }
  return (
    <Container>
      <Card>
        {expanded ? null : <Title>{slug}</Title>}
        <StopImage expanded={expanded} image={stop.image.url}></StopImage>
        {expanded ? <Title expanded={expanded}>{slug}</Title> : null}
        <PlayButton audio={stop.audio.url} expanded={expanded} />
        <ExpandButton expanded={expanded} onPress={toggleExpand}></ExpandButton>
        <StopText
          onPress={toggleExpand}
          expanded={expanded}
          transcript={stop.transcript}
          narrator={stop.narrator}
        ></StopText>
      </Card>

      <NavButton onPress={() => navigate('Home')}>
        <BackIcon></BackIcon>
      </NavButton>
    </Container>
  )
}

export default Stop
