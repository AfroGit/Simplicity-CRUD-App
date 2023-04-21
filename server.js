const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://KujengA4222:CVIbkatM0ACWn7nv@cluster0.lhyk1vq.mongodb.net/?retryWrites=true&w=majority"


MongoClient.connect(connectionString, 
    { 
      useUnifiedTopology: true 
    })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')

    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

    app.post('/quotes', (req, res) => {
  console.log(req.body)
})

  })
  .catch(error => console.error(error))
// place body-parser before your CRUD handlers!

// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Anaweza Bwana')
// })

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.post('/quotes', (req, res) => {
  console.log(req.body)
})





























app.listen(2023, function () {
  console.log('listening on server 2023')
})


console.log('May Node be with you')