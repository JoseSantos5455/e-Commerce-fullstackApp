const {Router} = require("express")
const {getAllProducts} = require("../handlers/productsHandlers/allProducts")
const { getProductsHandler } = require("../handlers/productsHandlers/getProductsByIdHandler")

const Products = Router()

Products.get("/", getAllProducts)
Products.get("/:id", getProductsHandler)
console.log('hola mundo');

module.exports = Products