const app = require('express')()
import * as cors from 'cors'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import { test } from './test'

require('dotenv').config({ path: '.env' })

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('error', (err) => {
  console.error('Database connection error:', err)
})

require('./models/Story.ts')
require('./models/Comment.ts')
require('./models/User.ts')
require('./models/Product.ts')
require('./models/PackageEntry.ts')

require('./handlers/passport.ts')

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.end('hello world!')
})

app.use('/', require('./routes/users.ts'))
app.use('/', require('./routes/auth.ts'))
app.use('/returnsList', require('./routes/returnslist.ts'))
app.use('/products', require('./routes/products.ts'))

app.use((req, res) => {
  res
    .status(404)
    .json({
      message: 'not found'
    })
})

app.use((err, req, res, next) => {
  let error = {
    status: err.status || 500,
    message: err.message || 'Something went wrong!'
  }
  if (process.env.NODE_ENV === 'development') {
    error['stack'] = err.stack
  }
  res
    .status(err.status || 500)
    .json(error)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`app backend is running on port ${port}`))

// test()