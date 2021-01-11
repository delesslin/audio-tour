const fs = require('fs')
const fetch = require('node-fetch')

async function downloadRemote(remoteURL, localURL, cb) {
  const response = await fetch(remoteURL)
  const buffer = await response.buffer()
  fs.writeFile(localURL, buffer, cb)
}
exports.downloadRemote = downloadRemote
