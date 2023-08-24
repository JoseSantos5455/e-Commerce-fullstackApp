const { Router } = require('express');
const productsRouter = require('./productRoutes');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter.js');

const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);

module.exports = router;