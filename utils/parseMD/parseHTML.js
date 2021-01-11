const { parse } = require('node-html-parser')
const parseHTML = (html, cb) => {
  const root = parse(html)
  const title = root.querySelector('h1').rawText
  const audio = root.querySelector('h2').rawText
  const image = root.querySelector('h3').rawText
  const text = root
    .querySelectorAll('p')
    .map((node) => node.childNodes[0].rawText)
  const parsed = {
    title,
    audio,
    image,
    text,
  }
  cb(parsed)
}

module.exports = parseHTML
