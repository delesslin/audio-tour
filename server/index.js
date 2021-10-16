require('dotenv').config()
const express = require('express')
const path = require('path')
// const cors = require('cors')
// const fetch = require('node-fetch')
const proxy = require('express-http-proxy')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 8000
let apiURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'

// app.use(cors())
app.use(express.static(path.join(__dirname, '../client/web-build')))
app.use('/api', proxy(apiURL))
// app.get('/api/*', (req, res) => {
//   const remoteURL = req.params[0]
//   axios(remoteURL).then(({ data }) => {
//     if (remoteURL.includes('image') || remoteURL.includes('audio')) {
//       res.sendFile(data)
//       return
//     }
//     res.send(data)
//   })
// })
app.get('/*', (req, res) => {
  console.log('GET * request', req.body)
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log(`Now listening on http://localhost:${PORT}`)
})
