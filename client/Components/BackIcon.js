import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Theme from '../Theme'
function BackIcon({ size = 40, color = Theme.BLACK }) {
  return (
    <Ionicons
      style={{
        position: 'absolute',
      }}
      name='arrow-back'
      size={size}
      color={color}
    />
  )
}

export default BackIcon
