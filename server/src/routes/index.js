const { Router } = require("express")
const Products = require("./Products")

const router = Router();

router.use("/products", Products)

module.exports = router