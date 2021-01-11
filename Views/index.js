// TODO implement opacity for barcode View

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Camera from './Camera'
import Home from './Home'
import Layout from './Layout'
import Stop from './Stop'
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
