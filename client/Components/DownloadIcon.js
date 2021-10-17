import React from 'react'
import { Feather } from '@expo/vector-icons'
const DownloadIcon = ({ size = 40, color = 'black' }) => {
  return (
    <Feather
      style={{ position: 'absolute' }}
      name='download-cloud'
      size={size}
      color={color}
    />
  )
}

export default DownloadIcon
