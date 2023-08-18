const {Router} = require("express")
const  {getProductsHandler}  = require("../handlers/productsHandlers/getProductsHandler")


const Products = Router()


Products.get("/products", getProductsHandler  )


module.exports = Products