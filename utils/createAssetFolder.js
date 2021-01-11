const fs = require('fs')
const rimraf = require('rimraf')
const createDir = (relPath, cb) => {
  fs.mkdir(relPath, (err) => {
    if (err) {
      console.error(err)
    }
    // cb
    cb()
  })
}
const createAssetFolder = (relPath, cb) => {
  fs.access(relPath, (err) => {
    if (err) {
      // console.log('no folder')
      // create directory
      // I think this pathway is relative to package.json
      createDir(relPath, cb)
    } else {
      // console.log('has folder')
      rimraf(relPath, () => {
        // create directory
        createDir(relPath, cb)
      })
    }
  })
}
exports.createAssetFolder = createAssetFolder
