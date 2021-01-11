const fs = require('fs')
const path = require('path')
const commonmark = require('commonmark')
const reader = new commonmark.Parser()
const writer = new commonmark.HtmlRenderer()

const readMD = (uri, cb) => {
  fs.readFile(uri, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }
    const parsed = reader.parse(data)
    const result = writer.render(parsed)
    cb(result)
  })
}
exports.readMD = readMD
