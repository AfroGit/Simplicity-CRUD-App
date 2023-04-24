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
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');
     app.set('view engine', 'ejs');//sets view engine to ejs & tells Express we’re using EJS as the template engine.

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))

    app.get('/', (req, res) => {
               quotesCollection.find().toArray()
                  .then(results => {
              console.log(results)
        res.render('index.ejs', { quotes: results })
    })
               
          // res.render('index.ejs', { quotes: results })
      
      // res.sendFile(__dirname + '/index.html') deprecated coz i now use res.render
})

    app.post('/quotes', (req, res) => {
      quotesCollection
            .insertOne(req.body)
            .then(result => {
              res.redirect('/')//asks the browser to redirect back to / instead
             console.log(result)
})
       .catch(error => console.error(error)) 
})

      app.listen(2023, function () {
  console.log('listening on server 2023')
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

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })





























// app.listen(2023, function () {
//   console.log('listening on server 2023')
// })


console.log('May Node be with you')