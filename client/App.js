import React, { useEffect, useState } from 'react'
import { Platform, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Views/Home'
import Stop from './Views/Stop'
import Camera from './Views/Camera'
import Download from './Views/Download'
import About from './Views/About'
import * as Font from 'expo-font'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { DataProvider } from './hooks'
// TODO: refactor navigation to reflect trail:stop architecture
const NotFound = ({ navigation }) => <Home navigation={navigation} />
const Stack = createNativeStackNavigator()
const linking = {
  prefixes: ['tour.catawbaculture.org'],
  config: {
    screens: {
      Home: '',
      Stop: 'stop/:trail/:slug',
      Camera: 'camera',
      Download: 'download',
      About: 'about',
      NotFound: '*',
    },
  },
}
function App() {
  const [fontLoading, setFontLoading] = useState(true)
  useEffect(() => {
    Font.loadAsync({
      title: require('./Fonts/Anton-Regular.ttf'),
      text: require('./Fonts/Nunito-Regular.ttf'),
    }).then((e) => setFontLoading(false))
  }, [])
  if (fontLoading) {
    return <Text>Loading...</Text>
  }
  return (
    <DataProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer linking={linking}>
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Stop' component={Stop} />
              {Platform.OS == 'web' ? null : (
                <Stack.Screen name='Camera' component={Camera} />
              )}
              {Platform.OS == 'web' ? (
                <Stack.Screen name='Download' component={Download} />
              ) : null}
              <Stack.Screen name='About' component={About} />
              <Stack.Screen name='NotFound' component={NotFound} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </DataProvider>
  )
}

export default App
