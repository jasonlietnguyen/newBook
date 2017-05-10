var mongoose = require('mongoose')

var Schema = mongoose.Schema

var BookSchema = new Schema({
  title: { type: String, required: true },
  aurthor: { type: String, required: true },
  rating: { type: Number, default: 1 },
  publish: { type: Number }
})

var Book = mongoose.model('Book', BookSchema)

module.exports = Book;