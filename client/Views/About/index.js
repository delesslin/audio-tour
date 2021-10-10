import React from 'react'
import {
  Container,
  Card,
  NavButton,
  DownloadIcon,
  BackIcon,
} from '../../Components'
import { Text, ScrollView, Platform } from 'react-native'
import { Link } from './Link'
import Theme from '../../Theme'

import useNav from '../../hooks/useNav'
const catawbaLink = 'https://catawbaculture.org',
  codeLink = 'https://github.com/delesslin/audio-tour',
  imlsLink = 'https://www.imls.gov/',
  landeckerLink =
    'https://www.humanityinaction.org/landeckerdemocracyfellowship/',
  scacLink = 'https://www.southcarolinaarts.com/',
  eyebeamLink = 'https://www.eyebeam.org/'

const Paragraph = ({ children }) => {
  return (
    <Text
      style={{
        fontSize: 15,
        fontFamily: 'text',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 15,
        textAlign: 'justify',
        lineHeight: Platform.OS == 'android' ? 20 : 30,
      }}
    >
      {children}
    </Text>
  )
}
const About = () => {
  const { to } = useNav()
  const toDownload = () => to('Download')
  const toHome = () => to('Home')
  return (
    <Container>
      <Card>
        <Text
          style={{
            fontSize: 50,
            fontFamily: 'title',
            textAlign: 'center',
            margin: 20,
          }}
        >
          ABOUT
        </Text>
        <ScrollView style={{ paddingHorizontal: 25, marginBottom: 50 }}>
          <Paragraph>
            The Catawba Audio Tour was developed by the{' '}
            <Link color={Theme.BLUE} href={catawbaLink}>
              Cultural Division
            </Link>{' '}
            of the Catawba Indian Nation to provide educational and informative
            experiences for Catawba citizens, community members, and the general
            public.
          </Paragraph>
          <Paragraph>
            All code is
            <Link href={codeLink} color={Theme.YELLOW}>
              {' '}
              open source and downloadable.
            </Link>
          </Paragraph>
          <Paragraph>
            App development was supported by:{' '}
            <Link color={Theme.RED} href={imlsLink}>
              {' '}
              The Institute for Museum and Library Services,
            </Link>
            <Link href={landeckerLink} color={Theme.TEAL}>
              {' '}
              Alfred Landecker Democracy Fellowship,
            </Link>
            <Link href={scacLink} color={Theme.BLUE}>
              {' '}
              South Carolina Arts Commission,
            </Link>
            and
            <Link href={eyebeamLink} color={Theme.RED}>
              {' '}
              Eyebeam Fractal Fellowship.
            </Link>
          </Paragraph>
        </ScrollView>
      </Card>
      <NavButton onPress={Platform.OS == 'web' ? toDownload : toHome}>
        {Platform.OS == 'web' ? <DownloadIcon /> : <BackIcon />}
      </NavButton>
    </Container>
  )
}

export default About
