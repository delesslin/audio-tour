const parseMD = require('parse-md').default

module.exports = (md) => {
  let { metadata, content } = parseMD(md)
  let paragraphs = content.split('\n')
  let filteredPs = paragraphs.filter((entry) => {
    return entry.length > 0
  })
  return {
    ...metadata,
    description: filteredPs,
  }
}
