const { Router } = require("express")
const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");

const router = Router();

router.use("/products", productsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;