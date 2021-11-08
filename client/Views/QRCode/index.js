import React, { useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
import QRCodeStyling from 'qr-code-styling'
import qrOptions from './qrOptions.json'
import qrOptionsInverted from './qrOptionsInverted.json'
import useStatic from '../../hooks/useStatic'

const qrCode = new QRCodeStyling({
  ...qrOptions,
})
const qrCodeInverted = new QRCodeStyling({
  ...qrOptionsInverted,
})
const QRCodes = ({ route }) => {
  const { trail, stop } = route.params
  const ref = useRef(null)
  const invertRef = useRef(null)
  const assets = useStatic()
  useEffect(() => {
    if (assets.loading) return
    qrCode.update({
      data: `https://www.catawbatour.org/stop/${trail}/${stop}`,
      image: assets.qrLogo,
    })
    qrCode.append(ref.current)
    qrCodeInverted.update({
      data: `https://www.catawbatour.org/stop/${trail}/${stop}`,
      image: assets.qrLogo,
    })
    qrCodeInverted.append(invertRef.current)
  }, [assets])
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 20 }}>
        {trail}/{stop}
      </Text>
      <Text
        style={{ textAlign: 'center' }}
      >{`https://www.catawbatour.org/stop/${trail}/${stop}`}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 25,
        }}
      >
        <View style={{ width: 250, height: 250 }} ref={ref}></View>
        <View style={{ width: 250, height: 250 }} ref={invertRef}></View>
      </View>
    </View>
  )
}

export default QRCodes
