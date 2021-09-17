const fs = require('fs')

module.exports = (dir) => {
  if (fs.existsSync(dir)) {
    console.log(
      'uh-oh build directory already exists. removing directory and everything in it'
    )
    fs.rmSync(dir, { recursive: true })
  }
  fs.mkdirSync(dir)
  fs.mkdirSync(`${dir}/audio`)
  fs.mkdirSync(`${dir}/image`)
  console.log('made the directory')
  return
}
