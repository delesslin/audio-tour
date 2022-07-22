const contentful = require('contentful')
const TOKEN = process.env.CONTENTFUL_TOKEN
const SPACE = process.env.CONTENTFUL_SPACE

const getStatic = async () => {
  console.log('GET contentful')
  try {
    const apiClient = contentful.createClient({
      space: SPACE,
      accessToken: TOKEN,
    })

    // TODO: Must find a more elegant way to handle this, particularly as data size increases
    let { items } = await apiClient.getEntries({
      // skip: 100,
      limit: 1000,
    })
    let static = items.filter((item) => {
      return item.sys.contentType.sys.id == 'static'
    })[0]

    return {
      welcomeTitle: static.fields.welcomeTitle,
      welcomeText: static.fields.welcomeText.contentType,
      welcomeImage: 'https:' + static.fields.welcomeImage.fields.file.url,
      welcomeAudio: 'https:' + static.fields.welcomeAudio.fields.file.url,
      about: static.fields.about.content,
      qrLogo: 'https:' + static.fields.qrLogo.fields.file.url,
      androidUrl: static.fields.androidUrl,
      iOsUrl: static.fields.iOsUrl,
    }
  } catch (e) {
    console.error(e)
  }
}
module.exports = getStatic
