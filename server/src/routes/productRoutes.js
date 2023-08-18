const {Router} = require("express")
const  getProductsHandler  = require("../handlers/productsHandlers/getProductsHandler")
const  getProductByIdHandler  = require("../handlers/productsHandlers/getProductByIdHandler")


const productsRouter = Router()


productsRouter.get("/", getProductsHandler  )
productsRouter.get("/:id", getProductByIdHandler  )


module.exports = productsRouter