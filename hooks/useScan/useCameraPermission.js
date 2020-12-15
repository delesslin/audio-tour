import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const useCameraPermission = (Camera) => {
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
  return hasPermission
}
export default useCameraPermission
