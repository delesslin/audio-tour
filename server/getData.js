const contentful = require('contentful')
const TOKEN = process.env.CONTENTFUL_TOKEN
const SPACE = process.env.CONTENTFUL_SPACE

const getData = async (DATA = {}) => {
  console.log('getting DATA')
  try {
    const apiClient = contentful.createClient({
      space: SPACE,
      accessToken: TOKEN,
    })
    // Probably change to a query to get trails
    let { items } = await apiClient.getEntries()
    let trails = items.filter((item) => item.sys.contentType.sys.id === 'trail')
    trails.forEach((trail) => {
      let trailName = trail.fields.name
      DATA[trailName] = {
        id: trail.sys.id,
        updatedAt: trail.sys.updatedAt,
        stops: {},
      }
      trail.fields.stops.forEach((stop) => {
        let fields = stop.fields
        let stopName = fields.slug
        DATA[trailName].stops[stopName] = {
          ...fields,
          id: stop.sys.id,
          updatedAt: stop.sys.updatedAt,
          transcript: fields.transcript.content,
          image: 'http:' + fields.image.fields.file.url,
          audio: 'http:' + fields.audio.fields.file.url,
        }
      })
    })
    return DATA
  } catch (e) {
    console.error(e)
  }
}
module.exports = getData
