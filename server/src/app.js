const express = require('express')
const server = express()
const morgan = require('morgan')
const router = require('./routes/index')
const cors = require('cors')

require('./db.js')

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://venerable-choux-eccf3d.netlify.app')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
server.use('/', router)

module.exports = server
