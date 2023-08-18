const {Router} = require('express');
const {getAllProductsHandler,createProductsHandler} = require('../handlers/productHandlers.js');

const productsRouter = Router();

productsRouter.get('/',getAllProductsHandler);
productsRouter.post('/',createProductsHandler);

module.exports = productsRouter;