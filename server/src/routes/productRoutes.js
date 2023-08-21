const {Router} = require("express")
const  getProductsHandler  = require("../handlers/productsHandlers/getProductsHandler")
const  getProductByIdHandler  = require("../handlers/productsHandlers/getProductByIdHandler")
const { createProductHandler } = require("../handlers/productsHandlers/createProductHandler")


const productsRouter = Router()


productsRouter.get("/", getProductsHandler  )
productsRouter.get("/:id", getProductByIdHandler  )
productsRouter.post("/", createProductHandler)


module.exports = productsRouter