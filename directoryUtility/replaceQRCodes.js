const fs = require('fs')
const { generateQRCodes } = require('./generateQRCodes')
let trailsPath = 'trails'
let trails = fs.readdirSync(trailsPath)

for (let trail of trails) {
  let trailPath = trailsPath + '/' + trail
  let stops = fs.readdirSync(trailPath)
  for (let stop of stops) {
    let stopPath = trailPath + '/' + stop
    let assets = fs.readdirSync(stopPath)
    let qrPath = stopPath + '/qr'
    if (assets.includes('qr')) {
      fs.rmdirSync(qrPath, { recursive: true })
    }
    fs.mkdirSync(qrPath)
    let data = `http://catawbatour.org/stop/${trail}/${stop}`
    generateQRCodes({ data, width: 500, logoSize: 125, path: qrPath })
  }
}
