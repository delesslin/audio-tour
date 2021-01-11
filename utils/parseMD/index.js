const parseHTML = require('./parseHTML')
const { readMD } = require('./readMD')

const parseMD = (uri, cb) => {
  readMD(uri, (res) => {
    parseHTML(res, (json) => {
      cb(json)
    })
  })
}

module.exports = parseMD
