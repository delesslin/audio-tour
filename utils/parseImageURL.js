const parseImageURL = (image, slug) => {
  let urlParts = image.split('.')
  let i = urlParts.length - 1
  let ext = urlParts[i]
  const name = `${slug}.${ext}`
  const url = `../assets/${name}`
  return { name, url }
}
exports.parseImageURL = parseImageURL
