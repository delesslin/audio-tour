// TODO: refactor
import React from 'react'
import useTheme from '../../hooks/useTheme'
import Panel from '../Panel'
import AudioSection from './AudioSection'
import { Transcript } from './Transcript'

const example =
  'https://media1.fdncms.com/charleston/imager/u/original/17882354/image_from_page_231_of_-bulletin-_1901_.jpg'

const Stop = ({ route, navigation }) => {
  const theme = useTheme()
  console.log('ROUTE PARAMS', route.params)
  const { title, audio, text: transcript, slug, image } = route.params[0]
  return (
    <Panel color='white' style={{ flex: 1 }}>
      <AudioSection img={image} title={title} audio={audio} />
      <Transcript transcript={transcript} />
    </Panel>
  )
}

export default Stop
