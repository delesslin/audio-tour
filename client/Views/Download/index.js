import React from 'react'
import BackIcon from '../../Components/BackIcon'
import Card from '../../Components/Card'
import CardText from '../../Components/CardText'
import Container from '../../Components/Container'
import NavButton from '../../Components/NavButton'
import Title from '../Stop/Title'
import { AntDesign } from '@expo/vector-icons'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Download = () => {
  const { navigate } = useNavigation()
  const toHome = () => navigate('Home')
  return (
    <Container>
      <Card>
        <Text
          style={{
            fontSize: 36,
            fontFamily: 'title',
            textAlign: 'center',
            padding: 20,
          }}
        >
          DOWNLOAD THE TOUR APP
        </Text>
        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{ fontSize: 18, textAlign: 'justify', fontFamily: 'text' }}
          >
            For the best tour experience, particularly along our trails, please
            download our app from the Google Play Store or Apple Store. Both are
            absolutely free to use.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Pressable
            style={{
              alignSelf: 'center',
              backgroundColor: '#3DDC84',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 60,
              borderRadius: 120,
              borderWidth: 3,
            }}
          >
            <AntDesign
              style={{ position: 'absolute' }}
              name='android'
              size={60}
              color='black'
            />
          </Pressable>
        </View>
      </Card>
      <NavButton onPress={toHome}>
        <BackIcon />
      </NavButton>
    </Container>
  )
}

export default Download
