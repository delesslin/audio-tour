require('dotenv').config()
const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')
const app = express()
const generateQR = require('./generateQR')
const PORT = process.env.PORT || 8001
let apiURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
const { ANDROID_URL, APPLE_URL, DATA_UPDATE_INTERVAL_MS } = process.env
let DATA = {}
const getData = require('./getData')

app.use(express.static(path.join(__dirname, '../client/web-build')))
app.get('/api/download/android', (req, res) => {
  res.send(ANDROID_URL)
})
app.get('/api/download/apple', (req, res) => {
  res.send(APPLE_URL)
})
app.get('/api/data', async (req, res) => {
  res.send(DATA)
})

app.use('/api', proxy(apiURL))
app.get('*', (req, res) => {
  console.log('GET * request', req.body)
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(PORT, async (err) => {
  if (err) console.error(err)
  console.log(`Now listening on http://localhost:${PORT}`)
  DATA = await getData()
  // setInterval(async () => {
  //   DATA = await getData()
  // }, DATA_UPDATE_INTERVAL_MS)
})
