require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8000
app.use(express.static(path.join(__dirname, '../client/web-build')))
app.get('*', (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log('Listening at http://localhost:8000')
})
