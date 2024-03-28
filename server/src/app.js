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
  const allowedOrigins = [
    'https://venerable-choux-eccf3d.netlify.app/',
    'https://venerable-choux-eccf3d.netlify.app/products',
    'https://venerable-choux-eccf3d.netlify.app/products/?',
    'https://venerable-choux-eccf3d.netlify.app/brands',
    'https://venerable-choux-eccf3d.netlify.app/categories'
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  
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
