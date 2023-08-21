const { Router } = require("express")
const productsRouter = require("./productRoutes");

const router = Router();

router.use("/products", productsRouter);

module.exports = router;