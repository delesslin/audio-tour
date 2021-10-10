import React from 'react'
import { BackIcon, Card, Container, NavButton } from '../../Components'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome5, Zocial } from '@expo/vector-icons'
import Theme from '../../Theme'
import useNav from '../../hooks/useNav'
const androidLink = 'http://google.com'
const iosLink = 'http://twitter.com'
function AppButton({
  size = 60,
  children,
  color = '#3DDC84',
  onPress = () => console.log('No link for app button'),
}) {
  return (
    <Pressable
      style={{
        alignSelf: 'center',
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: size,
        borderRadius: size * 2,
        borderWidth: 3,
      }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

const Download = () => {
  const { to, href } = useNav()
  const toHome = () => to('Home')
  const size = 60
  const toAndroid = () => href(androidLink)
  const toIOS = () => href(iosLink)
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
          DOWNLOAD THE APP
        </Text>
        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              fontFamily: 'text',
              marginTop: 25,
            }}
          >
            For the best tour experience, particularly along our trails, please
            download our app from the Google Play Store or Apple Store. Both are
            absolutely free to use and we do not track personal data.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            marginTop: 25,
            marginBottom: 50,
          }}
        >
          <AppButton size={size} onPress={toAndroid}>
            <Zocial
              name='android'
              style={{
                position: 'absolute',
              }}
              size={size}
              color='black'
            />
          </AppButton>
          <AppButton color={Theme.BLUE} onPress={toIOS}>
            <FontAwesome5
              name='app-store-ios'
              size={size}
              color='black'
              style={{ position: 'absolute' }}
            />
          </AppButton>
        </View>
      </Card>
      <NavButton onPress={toHome}>
        <BackIcon />
      </NavButton>
    </Container>
  )
}

export default Download
