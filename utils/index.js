const fs = require('fs')
const path = require('path')
const { createAssetFolder } = require('./createAssetFolder')
const genQr = require('./gen-qr')

const { readTemp } = require('./readTemp')
const { writeAssets } = require('./writeAssets')

// TODO: currently can't handle apostrophes in text
// console.log('Building assets')
createAssetFolder('assets', () => {
  readTemp(path.join(__dirname, '../temp'), (data) => {
    writeAssets(data, (data) => {
      // console.log('DATA!', data)
      const indexString = data.reduce(
        (str, { title, audio, image, text, slug }, index, array) => {
          let arraySuffix = ','
          if (index === array.length - 1) {
            arraySuffix = '] \n module.exports = registry'
          }
          return `${str} {
          title: '${title}',
          slug: '${slug}',
          audio: require('./${audio}'),
          image: require('./${image}'),
          text: [${text.reduce((str, text, i, arr) => {
            let suffix = ','
            if (i === arr.length - 1) {
              suffix = ''
            }
            return `${str} '${text}'${suffix}`
          }, '')}]
        }${arraySuffix}`
        },
        'const registry = ['
      )
      fs.writeFile(
        path.join(__dirname, '../assets/index.js'),
        indexString,
        (err) => {
          if (err) {
            console.error(err)
          }
          console.log('Wrote the index?')
          genQr(data, () => {
            console.log('qr written ?')
          })
        }
      )
    })
  })
})

// TODO: generate index.js file
// TODO: rewrite to asset folder
// TODO: read all audio files
// TODO: Read all .md files
// TODO:
