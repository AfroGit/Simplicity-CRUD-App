const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// place body-parser before your CRUD handlers!

app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Anaweza Bwana')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log('Hey There!')
})





























app.listen(2023, function () {
  console.log('listening on server 2023')
})


console.log('May Node be with you')