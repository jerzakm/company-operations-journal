import { makeAuthRoutes } from './auth'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = 3000

const STATIC = path.resolve(__dirname, 'public/client')
const INDEX = path.resolve(STATIC, 'index.html')

export const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static content
app.use(express.static(STATIC))

// SPA index.html
app.get('/', function (req, res) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  res.sendFile(INDEX)
})

// auth routes
makeAuthRoutes(app)

// Start server
app.listen(PORT, function () {
  console.log('Server up and running on ', `http://localhost:${PORT}/`)
})
