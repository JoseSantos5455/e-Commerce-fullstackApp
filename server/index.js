const server = require('./src/app')
const { conn } = require('./src/db')
const getAllProductsApi = require('./src/handlers/productsHandlers/getAllProductsApi.js')
const {
  addCategories,
} = require('./src/controllers/categoriesControllers/addCategoryController.js')
require('dotenv').config()

const PORT = process.env.PORT || 3001

conn.sync({ force: true }).then(() => {
   addCategories()
  getAllProductsApi()
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
  })
})
