import React, { useRef, useEffect, useState } from 'react'
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
const homeUrl = 'https://www.catawbatour.org'
const QRCodes = ({ route }) => {
  const ref = useRef(null)
  const invertRef = useRef(null)
  const assets = useStatic()
  const [uri, setUri] = useState(homeUrl)
  useEffect(() => {
    console.log(route.params)
    let str = homeUrl
    if (route.params) {
      if (route.params['route']) {
        str += '/' + route.params.route
      }
      if (route.params['trail']) {
        str += '/' + route.params.trail
      }
      if (route.params['stop']) {
        str += '/' + route.params.stop
      }
    }
    setUri(str)
  }, [route])
  useEffect(() => {
    console.log(route.params)
    if (assets.loading) return
    qrCode.update({
      data: uri,
      image: assets.qrLogo,
    })
    qrCode.append(ref.current)
    qrCodeInverted.update({
      data: uri,
      image: assets.qrLogo,
    })
    qrCodeInverted.append(invertRef.current)
  }, [assets])
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 20 }}>
        {uri}
      </Text>
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
