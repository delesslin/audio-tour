const fs = require('fs')
const process = require('process')

const { generateQRCodes } = require('./generateQRCodes')
let width = 500
// higher logoSizes relative to width run the risk of making code unreadable
let logoSize = 125
let rootPath = './trails'

let input = process.argv[2].split('/')
if (!input) {
  console.error(new Error('Forgot to include argument "trail/stop"'))
  return
}
let [trail, stop] = input

const existsOrCreate = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}
existsOrCreate(rootPath)

let trailPath = rootPath + `/${trail}`
existsOrCreate(trailPath)

let stopPath = trailPath + `/${stop}`
existsOrCreate(stopPath)
let templateJSON = {
  title: '',
  narrator: '',
}
let dataPath = stopPath + `/data.json`
fs.writeFileSync(dataPath, JSON.stringify(templateJSON))
let templateTXT = fs.readFileSync('directoryUtility/template.txt')
let txtPath = stopPath + '/transcript.txt'
let imgPath = stopPath + '/image'
fs.writeFileSync(txtPath, templateTXT)
fs.mkdirSync(imgPath)
let audioPath = stopPath + '/audio'
fs.mkdirSync(audioPath)
let qrPath = stopPath + '/qr'
fs.mkdirSync(qrPath)
let data = `http://catawbatour.org/stop/${trail}/${stop}`
generateQRCodes({ data, width, logoSize, path: qrPath })
