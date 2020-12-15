const fs = require('fs').promises
const QRCode = require('qrcode')
const workingDir = 'qr'
// Get data
const data = require('./assets/data.js')
// Gen QR FN
const generateQR = async (slug) => {
  try {
    await QRCode.toFile(`${workingDir}/${slug}.png`, slug)
  } catch (err) {
    console.error('GENQR ERROR')
    console.error(err)
  }
}
// TODO: Delete current qr codes. Also ignore qr folder THIS DOESN'T WORK

const rmDir = async (dirPath) => {
  return await fs.rmdir(dirPath, { recursive: true })
}
// rmDir('qr').then(async () => {
//   console.log('about to make dir')
//   return await fs.mkdir(`qr`, (err) => {
//     // if (err) console.error('error!!!', err)
//     console.log('ok continuing?')
//     // Save QR
//   })
// })
data.forEach(({ slug }) => {
  generateQR(slug)
})
