var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()
var port = 4545
var connectionString = 'mongodb://bookes:bookes@ds139725.mlab.com:39725/bookes'
var connection = mongoose.connection

mongoose.connect(connectionString, {
  server: { socketOption: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOption: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})

connection.on('error', function (err) {
  console.log('There was a connection problem', err)
})

connection.once('open', function () {
  console.log('We are now connected')
  server.listen(port, function () {
    console.log('The server is listening on port: ', port)
  })
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extend: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))

// Above this line most are the same, execpt the connection

var Schema = mongoose.Schema
var BookSchema = new Schema({
  title: { type: String, required: true },
  aurthor: { type: String, required: true },
  rating: { type: Number, default: 1 },
  publish: { type: Number }
})
var Book = mongoose.model('Book', BookSchema)

server.get('/', function(req, res, next) {
  res.send('You made it')
})

server.get('/books', function(req, res, next) {
  Book.find({}).then(function(books) {
    res.send(books)
  })
})

server.post('/books', function(req, res, next) {
  var newBook = req.body
  Book.create(newBook).then(function(books) {
    res.send(books)
  })
})