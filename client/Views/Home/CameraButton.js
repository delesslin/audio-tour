import React from 'react'

import Theme from 'Theme'
import { Feather } from '@expo/vector-icons'

const CameraButton = ({ color = Theme.BLACK, size = 50 }) => {
  return (
    <Feather
      style={{ position: 'absolute' }}
      name='camera'
      size={size}
      color={color}
    />
  )
}

export default CameraButton
