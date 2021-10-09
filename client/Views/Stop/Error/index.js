import React from 'react'
import Container from '../../../Components/Container'
import Card from '../../../Components/Card'
import { Text, Image, StyleSheet, View } from 'react-native'
import NavButton from '../../../Components/NavButton'
import BackIcon from '../../../Components/BackIcon'
import Acorn from './Acorn'
const Error = ({ navigate }) => {
  return (
    <Container>
      <Card>
        <View
          style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center' }}
        >
          <Text
            style={{
              fontFamily: 'title',
              textAlign: 'center',
              fontSize: 50,
              marginTop: 25,
            }}
          >
            Uh-oh!
          </Text>
          <Text
            style={{
              fontFamily: 'text',
              paddingHorizontal: 40,
              paddingVertical: 10,
              fontSize: 20,
              textAlign: 'justify',
            }}
          >
            We couldn't find that stop. Check your wifi or cellular connection
            and try again.
          </Text>
          <Image
            style={{ width: 425, flex: 1 }}
            source={require('./background.png')}
          />
        </View>
        <Acorn />
      </Card>
      <NavButton onPress={() => navigate('Home')}>
        <BackIcon />
      </NavButton>
    </Container>
  )
}

export default Error
