import * as mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  group: {
    type: String
  },
  symbol: {
    type: String
  },
  name: {
    type: String
  },
  volume: {
    type: Number
  },
  weight: {
    type: Number
  }
})

module.exports = mongoose.model('Product', productSchema)