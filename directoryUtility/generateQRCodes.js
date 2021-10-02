const QRCode = require('qrcode')
const images = require('images')
const jimp = require('jimp')

const generateQRCodes = ({ data, width, logoSize, path }) => {
  const fileName = `${path}/qr.png`
  const invertFileName = `${path}/qr-inverted.png`

  QRCode.toFile(
    fileName,
    data,
    {
      color: {
        dark: '#000',
        light: '#fff', // Transparent background
      },
      width,
    },
    function (err) {
      if (err) throw err

      let offset = width / 2 - logoSize / 2

      images(fileName) //Load image from file
        .size(width)

        .draw(
          images('./directoryUtility/logo.png').size(logoSize, logoSize),
          offset,
          offset
        ) //Drawn logo at coordinates (10,10)

        .save(fileName, {
          //Save the image to a file, with the quality of 50
          quality: 50, //保存图片到文件,图片质量为50
        })
      jimp.read(fileName, (err, img) => {
        if (err) throw err
        img.invert().write(invertFileName) // save
      })
    }
  )
}
exports.generateQRCodes = generateQRCodes
