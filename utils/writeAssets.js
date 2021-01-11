const parseMD = require('./parseMD')

const path = require('path')
const { parseImageURL } = require('./parseImageURL')
const { downloadRemote } = require('./downloadRemote')
const fs = require('fs')

const writeAssets = (obj, cb) => {
  let promises = obj.md.map((uri) => {
    return new Promise((resolve, reject) => {
      parseMD(path.join(__dirname, `../temp/${uri}`), (json) => {
        let slug = uri.split('.')[0]
        // console.log('slug', slug)
        json = { ...json, slug }
        // console.log(json)
        if (json.image.includes('http')) {
          // console.log("we've got a remote resource!!!!!!!!", json.image)
          const { url, name } = parseImageURL(json.image, slug)

          downloadRemote(json.image, path.join(__dirname, url), (res) => {
            // console.log(res)
            const src = path.join(__dirname, `../temp/${json.audio}`)
            const dest = path.join(__dirname, `../assets/${slug}.mp3`)
            fs.copyFile(src, dest, fs.constants.COPYFILE_EXCL, (err) => {
              if (err) {
                console.error(err)
              }
              resolve({
                ...json,
                image: name,
                audio: `${slug}.mp3`,
              })
            })
          })
          // Fetch image
          // Write image
        } else {
          console.error("I don't recognize that image link")
          const imgArrayURI = json.image.split('.')
          const i = imgArrayURI.length - 1
          const ext = imgArrayURI[i]
          const imgSrc = path.join(__dirname, `../temp/${json.image}`)
          const imgDest = path.join(__dirname, `../assets/${json.image}`)
          fs.copyFile(imgSrc, imgDest, fs.constants.COPYFILE_EXCL, (err) => {
            if (err) {
              console.error(err)
            }
            const src = path.join(__dirname, `../temp/${json.audio}`)
            const dest = path.join(__dirname, `../assets/${slug}.mp3`)
            fs.copyFile(src, dest, fs.constants.COPYFILE_EXCL, (err) => {
              if (err) {
                console.error(err)
              }
              resolve({ ...json, audio: `${slug}.mp3` })
            })
            // resolve({
            //   ...json,
            //   image: name,
            // })
          })
          // resolve(json)
        }
      })
    })
  })
  Promise.all(promises).then((vals) => {
    cb(vals)
  })
}
exports.writeAssets = writeAssets
