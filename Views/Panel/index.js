import React from 'react'
import { View } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { Buttons } from '../Layout/Buttons'

const Panel = ({ children, color = 'red', navigation }) => {
  const theme = useTheme()
  return (
    <>
      <Buttons />
      <View
        style={{
          backgroundColor: theme.colors[color],
          margin: 25,
          flex: 10,
          borderRadius: 25,

          elevation: 3,
          flex: 10,
          position: 'relative',
        }}
      >
        {children}
      </View>
    </>
  )
}

export default Panel
