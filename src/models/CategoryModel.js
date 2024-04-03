const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  id: Number,
  name: String,
  products: [{
    id: Number,
    name: String
  }]
})
const CategorytModel = mongoose.model('products', categorySchema)
module.exports = { CategorytModel }
