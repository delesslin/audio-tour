// TODO implement opacity for barcode View
import React from 'react'
import { DataProvider } from './hooks/useData'
import { ThemeProvider } from './hooks/useTheme'
import Views from './Views'
import { View, Text } from 'react-native'
import {
  useFonts,
  PermanentMarker_400Regular,
} from '@expo-google-fonts/permanent-marker'
// TODO: move to /Views folder
export default function App() {
  let [fontsLoaded] = useFonts({ PermanentMarker_400Regular })
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <DataProvider>
      <ThemeProvider>
        <Views />
      </ThemeProvider>
    </DataProvider>
  )
}
