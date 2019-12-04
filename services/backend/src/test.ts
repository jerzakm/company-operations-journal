const fs = require('fs')
import { subiektConnection, sendQuery } from "./handlers/subiekt"
import * as mongoose from 'mongoose'

require('./models/Product.ts')
const Product = mongoose.model('Product')


export const test = async () => {

}