import React, { useRef } from 'react'
import { Container, Card, NavButton, BackIcon } from '../../../Components'
import {
  Text,
  Image,
  StyleSheet,
  View,
  Animated,
  Easing,
  Platform,
} from 'react-native'
import Acorn from './Acorn'
const Error = ({ navigate }) => {
  const opacity = useRef(new Animated.Value(0)).current
  const handleLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: false,
      easing: Easing.ease,
      duration: 300,
    }).start()
  }
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
          <Animated.View style={{ width: 425, flex: 1, opacity }}>
            <Image
              style={{
                width: Platform.OS == 'android' ? 375 : 425,
                flex: 1,
                left: Platform.OS == 'android' ? 50 : 0,
              }}
              source={require('./background.png')}
              onLoad={handleLoad}
            />
          </Animated.View>
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
