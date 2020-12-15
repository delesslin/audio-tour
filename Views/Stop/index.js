// TODO: refactor
import React from 'react'

import { ImageBackground } from 'react-native'

import useData from '../../hooks/useData'
import Panel from '../Panel'
import data from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import AudioSection from './AudioSection'
import { Transcript } from './Transcript'
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
      <AudioSection img={example} title={title} />
      <Transcript transcript={transcript} />
    </Panel>
  )
}

export default Stop
