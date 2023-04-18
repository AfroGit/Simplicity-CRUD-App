const express = require('express')
const app = express()
// const PORT = 2023



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
  console.log('listening on 2023')
})


console.log('May Node be with you')