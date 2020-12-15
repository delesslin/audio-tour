// TODO implement opacity for barcode View

import React from 'react'
import { Text } from 'react-native'
import Camera from './Camera'
import Layout from './Layout'
import Panel from './Panel'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Stop from './Stop'
import Home from './Home'
const Stack = createStackNavigator()

export default function Views() {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Camera' component={Camera} />
          <Stack.Screen name='Stop' component={Stop} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  )
}
