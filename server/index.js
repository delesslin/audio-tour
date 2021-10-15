const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, '../client/web-build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(8000, (err) => {
  if (err) console.error(err)
  console.log('Listening at http://localhost:8000')
})
