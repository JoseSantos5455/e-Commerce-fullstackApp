const {Router} = require("express")
const {getAllProducts} = require("../controllers/allProducts")

const Products = Router()

Products.get("/", getAllProducts);

module.exports = Products