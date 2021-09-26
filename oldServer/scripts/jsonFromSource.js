const mdToJson = require('./mdToJson')
const fs = require('fs')
module.exports = (dir) => {
  let payload = []
  fs.readdirSync(dir).forEach((file) => {
    if (file.includes('.md')) {
      let fileContents = fs.readFileSync(`${dir}/${file}`, 'utf-8')
      payload.push(mdToJson(fileContents))
    }
  })
  return payload
}
