require('dotenv').config()
const express = require('express')
const path = require('path')
// TODO: is proxy still needed?

const app = express()

const PORT = process.env.PORT || 8001
// let apiURL = 'https://catawba-audio-tour.s3.us-east-2.amazonaws.com'
// const { DATA_UPDATE_INTERVAL_MS, ENVIRONMENT } = process.env
let DATA = {}
let STATIC = {}
const getData = require('./getData')
const getStatic = require('./getStatic')
// TODO: https redirect
// app.use(function (request, response, next) {
//   if (process.env.ENVIRONMENT == 'production' && !request.secure) {
//     return response.redirect('https://' + request.headers.host + request.url)
//   }

//   next()
// })
app.use(express.static(path.join(__dirname, '../client/web-build')))

app.get('/api/data', async (req, res) => {
  res.send(DATA)
})
app.get('/api/static', async (req, res) => {
  res.send(STATIC)
})
app.get('/privacy', (req, res) => {
  res.send(`
    Catawba Nation's Audio Tour server and websites/apps ("clients") do not collect personal data from site visitors or app users ("users"). When users access the Audio Tour through a client generic requests are made to our server. Any unintentional data that is included in that request by default (e.g. source IP) is not used or collected by the server. The app is free to download, free to use, and does not contain any premium options. For questions regarding this policy, please contact us at info@catawbaculture.org
  `)
})
// app.use('/api', proxy(apiURL))
app.get('*', (req, res) => {
  console.log('GET * request', req.headers)
  res.sendFile(path.join(__dirname, '../client/web-build/index.html'))
})

app.listen(PORT, async (err) => {
  if (err) console.error(err)
  console.log(`Now listening on http://localhost:${PORT}`)
  DATA = await getData()
  STATIC = await getStatic()
  // setInterval(async () => {
  //   DATA = await getData()
  // }, DATA_UPDATE_INTERVAL_MS)
})
