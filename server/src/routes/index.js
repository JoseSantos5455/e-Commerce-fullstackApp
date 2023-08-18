const { Router } = require("express")
const productsRouter = require("./productRoutes");
const categoriesRouter = require("./categoriesRouter");

const router = Router();

router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;