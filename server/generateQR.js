const QRCode = require('qr-code-styling')
const qrOptions = require('./qrOptions.json')
const images = require('images')
const jimp = require('jimp')
const logo = require('./logo.png')
const generateQRCodes = async ({ data, inverted }) => {
  const code = new QRCode({
    width: 500,
    height: 500,
    data,
    margin: 10,
    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
    dotsOptions: { type: 'extra-rounded', color: '#000000' },
    backgroundOptions: { color: '#ffffff' },
    image: logo,
    dotsOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: '#6a1a4c',
        color2: '#6a1a4c',
        rotation: '0',
      },
    },
    cornersSquareOptions: { type: 'dot', color: '#000000' },
    cornersSquareOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: '#000000',
        color2: '#000000',
        rotation: '0',
      },
    },
    cornersDotOptions: { type: 'dot', color: '#000000' },
    cornersDotOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: '#000000',
        color2: '#000000',
        rotation: '0',
      },
    },
    backgroundOptionsHelper: {
      colorType: { single: true, gradient: false },
      gradient: {
        linear: true,
        radial: false,
        color1: '#ffffff',
        color2: '#ffffff',
        rotation: '0',
      },
    },
  })
  const raw = await code.getRawData('png')
  return raw
}
exports.generateQRCodes = generateQRCodes
