const QRCode = require('qrcode-svg')

const handleQrRequest = (req, res) => {
  let { uri, side } = req.params
  let content = uri.split('.svg')[0]
  console.log(content)
  let svg = new QRCode({
    content,
    width: side,
    height: side,
    // join: true,
    // xmlDeclaration: false,
  }).svg()
  // let path = svg.split('d="')[1].split('"')[0]
  // res.send(JSON.stringify(path))
  res.set('Content-Type', 'image/svg+xml')
  res.send(svg)
}
exports.handleQrRequest = handleQrRequest
