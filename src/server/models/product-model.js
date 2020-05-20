const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  _id: { type: Number, required: true },
})

module.exports = mongoose.model('products', Product)
