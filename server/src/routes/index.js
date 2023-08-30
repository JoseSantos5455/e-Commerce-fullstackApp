const { Router } = require('express');
const productsRouter = require('./productRoutes');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter.js');
const mercadoPagoRouter = require('./mercadoPagoRouter.js');
const reviewsRouter = require('./reviewsRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter.js')


const router = Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/users', usersRouter);
router.use('/mercadopago', mercadoPagoRouter);
router.use('/reviews', reviewsRouter);
router.use('/mercadopago', mercadoPagoRouter)


module.exports = router;