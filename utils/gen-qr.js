const fs = require('fs')
const QRCode = require('qrcode')

const path = require('path')

const generateQR = async (slug) => {
  try {
    await QRCode.toFile(path.join(__dirname, `../assets/qr/${slug}.png`), slug)
    return
  } catch (err) {
    console.error('GENQR ERROR')
    console.error(err)
  }
}

module.exports = (array, cb) => {
  console.log('ARRAY???')
  fs.mkdir(path.join(__dirname, '../assets/qr'), {}, (err) => {
    if (err) {
      console.error(err)
    }

    array.forEach(({ slug }) => {
      generateQR(slug)
    })
  })
}
