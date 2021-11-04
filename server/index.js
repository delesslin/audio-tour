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
const { ANDROID_URL, APPLE_URL } = process.env

// app.use(cors())
app.use(express.static(path.join(__dirname, '../client/web-build')))
app.get('/api/download/android', (req, res) => {
  res.send(ANDROID_URL)
})
app.get('/api/download/apple', (req, res) => {
  res.send(APPLE_URL)
})
app.use('/api', proxy(apiURL))
app.get('*', (req, res) => {
  console.log('GET * request', req.body)
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log(`Now listening on http://localhost:${PORT}`)
})
