import { useNavigation } from '@react-navigation/core'
import * as Linking from 'expo-linking'
import React from 'react'

const useNav = () => {
  const { navigate } = useNavigation()
  const to = (route, obj = {}) => navigate(route, obj)
  const href = (url) => Linking.openURL(url)
  return { to, href }
}

export default useNav
