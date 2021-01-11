const fs = require('fs')

const readTemp = (uri, cb) => {
  fs.readdir(uri, (err, files) => {
    // console.log('READ DIRECTORTY')
    if (err) {
      console.error(err)
    }
    let data = files.reduce(
      (obj, entry) => {
        const uriArr = entry.split('.')
        if (uriArr.length < 2) {
          // TODO: handle folders
          console.log(
            'Looks like we found a folder! Unfortunately, right now we have not implemented subfolders in temp. Please move content to surround .temp folder',
            entry
          )
        } else {
          // TODO: change boolean values to config.audioExtensions.includes(uriArr[1])
          if (uriArr[1] === 'md') {
            // console.log('Got a md!', entry)
            return { ...obj, md: [...obj.md, entry] }
          } else if (uriArr[1] === 'mp3') {
            // console.log('Got audio!', entry)
            return { ...obj, audio: [...obj.audio, entry] }
          } else if (
            uriArr[1].toUpperCase() === 'JPG' ||
            uriArr[1].toUpperCase() === 'PNG'
          ) {
            return { ...obj, images: [...obj.images, entry] }
          } else {
            console.log("I don't recognize this extension: ", entry)
          }
        }
      },
      { md: [], audio: [], images: [] }
    )
    cb(data)
  })
}
exports.readTemp = readTemp
