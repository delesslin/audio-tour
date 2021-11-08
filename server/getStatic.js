const contentful = require('contentful')
const TOKEN = process.env.CONTENTFUL_TOKEN
const SPACE = process.env.CONTENTFUL_SPACE

const getStatic = async () => {
  try {
    const apiClient = contentful.createClient({
      space: SPACE,
      accessToken: TOKEN,
    })
    // Probably change to a query to get trails
    let { items } = await apiClient.getEntries()
    let static = items.filter(
      (item) => item.sys.contentType.sys.id == 'static'
    )[0]

    return {
      welcomeTitle: static.fields.welcomeTitle,
      welcomeText: static.fields.welcomeText.contentType,
      welcomeImage: 'https:' + static.fields.welcomeImage.fields.file.url,
      welcomeAudio: 'https:' + static.fields.welcomeAudio.fields.file.url,
      about: static.fields.about.content,
      qrLogo: 'https:' + static.fields.qrLogo.fields.file.url,
    }
  } catch (e) {
    console.error(e)
  }
}
module.exports = getStatic
