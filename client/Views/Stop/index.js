import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { NavButton, Container, Card, BackIcon } from 'Components'
import StopText from './StopText'
import PlayButton from './PlayButton'
import { ExpandButton } from './ExpandButton'
import StopImage from './StopImage'
import Title from './Title'
import { useData, useSound, useNav } from 'hooks'
import ErrorView from './Error'
import Loading from './Loading'

const Stop = ({ route }) => {
  const { slug = 'NO SLUG', trail = 'NO TRAIL' } = route.params
  const [expanded, setExpanded] = useState(false)
  const { stop, loading, error } = useData({ trail, slug })
  const [imgLoaded, setImgLoaded] = useState(false)
  const {
    loadSound,
    isLoading,
    isPlaying,
    unloadSound,
    playSound,
    stopSound,
    progress,
  } = useSound()
  const { to } = useNav()
  const toggleExpand = () => setExpanded(!expanded)
  useEffect(() => {
    if (!loading && !error) {
      loadSound({
        uri: stop.audio,
      })
      return () => unloadSound
    }
  }, [loading, error])
  const handleNav = () => {
    stopSound().then(() => to('Home'))
  }
  if (loading) {
    // TODO: fix weird glitch
    return <Loading />
  }
  if (error) {
    return <ErrorView navigate={to} />
  }

  return (
    <Container>
      <Card>
        {expanded ? null : <Title>{stop.title}</Title>}
        <StopImage
          expanded={expanded}
          progress={progress}
          isPlaying={isPlaying}
          image={stop.image}
          onLoad={() => setImgLoaded(true)}
        ></StopImage>
        {expanded ? <Title expanded={expanded}>{stop.title}</Title> : null}
        <PlayButton
          handlePlay={playSound}
          handleStop={stopSound}
          isPlaying={isPlaying}
          expanded={expanded}
          progress={progress}
        />

        {!imgLoaded ? null : (
          <ExpandButton
            expanded={expanded}
            onPress={toggleExpand}
          ></ExpandButton>
        )}
        <StopText
          onPress={toggleExpand}
          expanded={expanded}
          transcript={stop.transcript}
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
