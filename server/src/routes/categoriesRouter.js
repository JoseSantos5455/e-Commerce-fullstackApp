const {Router} = require('express');
const {addCategoriesHandler} = require('../handlers/categoriesHandlers.js');

const productsRouter = Router();

productsRouter.post('/',addCategoriesHandler);

module.exports = productsRouter;