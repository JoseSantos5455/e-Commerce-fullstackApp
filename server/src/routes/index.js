const { Router } = require('express');
const productsRouter = require('./productRoutes');
const categoriesRouter = require('./categoriesRoutercategories');

const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);

module.exports = router;