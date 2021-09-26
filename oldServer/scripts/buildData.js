const eraseAndCreateDir = require('./eraseAndCreateDir')
const fetch = require('node-fetch')

const fs = require('fs')
const jsonFromSource = require('./jsonFromSource')
const src = 'src'
const dest = '_data'

const fetchImageBuffer = async (url) => {
  const response = await fetch(url)
  return await response.buffer()
}

let copyFile = (file, src, dest) => {
  let oldPath = `${src}/${file}`
  let newPath = `${dest}/${file}`
  fs.copyFileSync(oldPath, newPath)
}
const buildData = async () => {
  eraseAndCreateDir(dest)

  let data = jsonFromSource(src)
  for (let i = 0; i < data.length; i++) {
    let entry = data[i]
    let slug = entry.title.toLowerCase().replace(' ', '-')
    copyFile(entry.audio, src, `${dest}/audio`)

    if (entry.image.includes('http')) {
      let imageFile = `${slug}.jpg`
      fs.writeFileSync(
        `${dest}/image/${imageFile}`,
        await fetchImageBuffer(entry.image)
      )
      data[i].image = imageFile
    } else {
      copyFile(entry.image, src, `${dest}/image`)
    }
    data[i].slug = slug
  }
  let payload = { CREATION_DATE: new Date(), data }
  fs.writeFileSync(`${dest}/db.json`, JSON.stringify(payload))
  return
}

buildData()
