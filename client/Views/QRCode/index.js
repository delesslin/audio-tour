import React, { useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
import QRCodeStyling from 'qr-code-styling'
import qrOptions from './qrOptions.json'
import qrOptionsInverted from './qrOptionsInverted.json'
import logo from './logo.png'
const qrCode = new QRCodeStyling({
  ...qrOptions,
  image: logo,
})
const qrCodeInverted = new QRCodeStyling({
  ...qrOptionsInverted,
  image: logo,
})
const QRCodes = ({ route }) => {
  const { trail, stop } = route.params
  const ref = useRef(null)
  const invertRef = useRef(null)
  useEffect(() => {
    qrCode.update({
      data: `https://www.catawbatour.org/stop/${trail}/${stop}`,
    })
    qrCode.append(ref.current)
    qrCodeInverted.update({
      data: `https://www.catawbatour.org/stop/${trail}/${stop}`,
    })
    qrCodeInverted.append(invertRef.current)
  }, [])
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
