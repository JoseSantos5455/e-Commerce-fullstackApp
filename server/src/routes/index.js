const { Router } = require('express');
const productsRouter = require('./productRoutes.js');
const categoriesRouter = require('./categoriesRouter.js');
const usersRouter = require('./usersRouter.js');
const reviewsRouter = require('./reviewsRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter')

const brandsRouter = require('./brandsRouter.js');
const ordersRouter = require('./ordersRouter.js');

const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
// router.use('/reviews', reviewsRouter);
router.use('/mercadopago', mercadoPagoRouter)

router.use('/brands', brandsRouter);
router.use('/orders',ordersRouter);

module.exports = router;