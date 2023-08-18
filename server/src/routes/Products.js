const {Router} = require("express")
const {getAllProducts} = require("../handlers/productsHandlers/allProducts")
const { getProductsHandler } = require("../handlers/productsHandlers/getProductsByIdHandler")
const { getProductByNameHandler } = require("../handlers/productsHandlers/getProductByNameHandler")

const Products = Router()


Products.get("/", getAllProducts)
Products.get("/:id", getProductsHandler)
Products.get('/name', getProductByNameHandler)


module.exports = Products