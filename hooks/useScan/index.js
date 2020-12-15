import { useState } from 'react'
import useCameraPermission from './useCameraPermission'

const useScan = (Camera) => {
  const [barcode, setBarcode] = useState({ loaded: false })
  const hasPermission = useCameraPermission(Camera)
  const type = Camera.Constants.Type.back
  const handleScan = (barcodeData) => {
    if (barcodeData.type === Camera.Constants.BarCodeType.qr) {
      // console.log(barcodeData)
      setBarcode({ loaded: true, ...barcodeData })
    } else {
      setBarcode('Some other code')
    }
  }

  return { barcode, handleScan, hasPermission, type }
}

export default useScan
