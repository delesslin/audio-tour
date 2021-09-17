const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4001
const { handleQrRequest } = require('./handleQrRequest')
app.get('/api/qr/:side/:uri', handleQrRequest)

app.use('/api', express.static('_data'))
app.use('/', express.static('app/build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'))
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log(`listening on http://localhost:${PORT}`)
})
