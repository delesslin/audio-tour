const fs = require('fs')
const rootPath = 'trails'
const clearDotFiles = (path) => {
  let results = fs.readdirSync(path)
  if(results.includes('.DS_Store')){
    // remove .DS_Store
    console.log("Uh .DS_Store in ", path)
  }
}

let trails = fs.readdirSync(rootPath)
const boolMoji = (bool) => (bool ? '💚' : '🔴')
let readyArray = []
let notReadyObj = {}
trails.forEach((trail) => {
  // TODO: does trail only contain letters and dashes?
  let trailPath = rootPath + `/${trail}`

  let stops = fs.readdirSync(trailPath)
  notReadyObj[trail] = {}
  stops.forEach((stop) => {
    const stopPath = trailPath + `/${stop}`
    console.log(`===========\n===========\n===========\n${stop}\n===========`)
    const validStopName = !stop.includes(' ')
    const hasImage = (() => {
      let images = fs.readdirSync(stopPath + '/image')
      if (images.length !== 1) {
        return false
      }
      // TODO: check filename extensions
      const extensions = ['jpg', 'png', 'jpeg']

      if (
        images.filter((img) => {
          const parts = img.split('.')
          return extensions.includes(parts[parts.length - 1].toLowerCase())
        }).length !== 1
      ) {
        return false
      }
      if (images[0] !== images[0].replace(/ /g, '')) return false
      return true
    })()
    const hasAudio = (() => {
      let audios = fs.readdirSync(stopPath + '/audio')
      if (audios.length !== 1) {
        return false
      }
      // TODO: check filename extensions
      if (!audios[0].includes('.')) {
        return false
      }
      if (audios[0] !== audios[0].replace(/ /g, '')) return false
      return true
    })()
    const transcriptPath = stopPath + '/transcript.txt'
    const hasTranscript = (() => {
      if (!fs.existsSync(transcriptPath)) {
        return false
      }
      let transcript = fs.readFileSync(transcriptPath, {
        encoding: 'utf8',
        flag: 'r',
      })

      if (transcript.length < 20) {
        return false
      }
      return true
    })()
    const hasLoremTranscript = (() => {
      if (!fs.existsSync(transcriptPath)) {
        return false
      }
      let transcript = fs.readFileSync(transcriptPath, {
        encoding: 'utf8',
        flag: 'r',
      })
      if (transcript.includes('ipsum')) {
        return true
      }
      return false
    })()
    const { narrator, title } = JSON.parse(
      fs.readFileSync(stopPath + `/data.json`)
    )
    const hasNarrator = (() => {
      if (narrator.length < 3) {
        return false
      }

      return true
    })()
    const hasTitle = (() => {
      if (title.length < 3) {
        return false
      }
      return true
    })()
    const cautionObj = (() => {
      let obj = {}
      if (hasLoremTranscript) {
        obj = {
          'Caution: uses Lorem Ipsum': '⚠️',
        }
      }
      return obj
    })()
    let checkObj = {
      'Valid stop directory name:': boolMoji(validStopName),
      'Has 1 valid image:': boolMoji(hasImage),
      'Has 1 valid audio:': boolMoji(hasAudio),
      'Has a narrator:': boolMoji(hasNarrator),
      'Has a title:': boolMoji(hasTitle),
      'Has transcript/text:': boolMoji(hasTranscript),
      ...cautionObj,
    }
    if (
      validStopName &&
      hasImage &&
      hasAudio &&
      hasNarrator &&
      hasTitle &&
      hasTranscript
    ) {
      readyArray.push(stopPath)
    } else {
      notReadyObj[trail][stop] = checkObj
    }
  })
})
console.error('Needs work', notReadyObj)
console.log('Ready to publish (maybe):', readyArray)
