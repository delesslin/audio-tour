import React, { useEffect, useState } from 'react'
import { View, Text, Platform } from 'react-native'
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
import useSound from '../../hooks/useSound'

const Stop = ({ route, navigation: { navigate } }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [expanded, setExpanded] = useState(true)
  const { stop, loading, error } = useData({ trail, slug })
  const { loadSound, isLoading, isPlaying, unloadSound, playSound, stopSound } =
    useSound()
  const toggleExpand = () => setExpanded(!expanded)
  useEffect(() => {
    if (!loading && !error) {
      loadSound({
        uri: Platform.OS == 'web' ? stop.audio.url : stop.audio.uri,
      })
      return () => unloadSound
    }
  }, [loading, error])
  const handleNav = () => {
    stopSound().then(() => navigate('Home'))
  }
  if (loading) {
    // TODO: fix weird glitch
    return <Loading />
  }
  if (error) {
    return <ErrorView navigate={navigate} />
  }

  return (
    <Container>
      <Card>
        {expanded ? null : <Title>{slug}</Title>}
        <StopImage
          expanded={expanded}
          image={Platform.OS == 'web' ? stop.image.url : stop.image.uri}
        ></StopImage>
        {expanded ? <Title expanded={expanded}>{slug}</Title> : null}
        <PlayButton
          handlePlay={playSound}
          handleStop={stopSound}
          isPlaying={isPlaying}
          expanded={expanded}
        />

        <ExpandButton expanded={expanded} onPress={toggleExpand}></ExpandButton>
        <StopText
          onPress={toggleExpand}
          expanded={expanded}
          transcript={stop.text}
          narrator={stop.narrator}
        ></StopText>
      </Card>

      <NavButton onPress={handleNav}>
        <BackIcon></BackIcon>
      </NavButton>
    </Container>
  )
}

export default Stop
