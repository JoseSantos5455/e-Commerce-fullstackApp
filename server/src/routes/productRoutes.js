const {Router} = require("express")
const  getProductsHandler  = require("../handlers/productsHandlers/getProductsHandler")
const  getProductByIdHandler  = require("../handlers/productsHandlers/getProductByIdHandler")
const  createProductHandler  = require("../handlers/productsHandlers/createProductHandler")
const  updateProductHandler  = require("../handlers/productsHandlers/updateProductHandler")
const  deleteProductHandler  = require("../handlers/productsHandlers/createProductHandler")


const productsRouter = Router();


productsRouter.get("/", getProductsHandler);
productsRouter.get("/:id", getProductByIdHandler);
productsRouter.post("/", createProductHandler);
productsRouter.put("/:id", updateProductHandler);
productsRouter.delete("/:id", deleteProductHandler);


module.exports = productsRouter