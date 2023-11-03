const server = require('./src/app')
const { conn } = require('./src/db')

const getAllProductsApi = require('./src/handlers/productsHandlers/getAllProductsApi.js')
const {
  addCategories,
} = require('./src/controllers/categoriesControllers/addCategoryController.js')

const PORT = process.env.PORT 

conn.sync({ force: false }).then(() => {
  // addCategories()
  getAllProductsApi()
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
  })
})
