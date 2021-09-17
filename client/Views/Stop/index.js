// TODO: refactor
import React from 'react'
import Panel from '../Panel'
import AudioSection from './AudioSection'
import { Transcript } from './Transcript'

const Stop = ({ route }) => {
  const { title, audio, description: transcript, slug, image } = route.params
  return (
    <Panel color='white' style={{ flex: 1 }}>
      <AudioSection img={image} title={title} audio={audio} />
      <Transcript transcript={transcript} />
    </Panel>
  )
}

export default Stop
