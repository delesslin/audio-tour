import React from 'react'
import { View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { Buttons } from '../Layout/Buttons'

const Panel = ({ children, color = 'red', navigation }) => {
  const theme = useTheme()
  return (
    <>
      <View
        style={{
          backgroundColor: theme.colors[color],
          marginTop: 10,
          marginHorizontal: 10,
          flex: 10,
          borderRadius: 10,
          elevation: 3,
          flex: 10,
          position: 'relative',
        }}
      >
        {children}
      </View>
      <Buttons />
    </>
  )
}

export default Panel
