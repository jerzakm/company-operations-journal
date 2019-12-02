import * as mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  group: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Product', productSchema)
