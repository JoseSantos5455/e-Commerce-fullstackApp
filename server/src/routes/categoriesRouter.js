const {Router} = require('express');
const addCategoryHandler = require('../handlers/categoriesHandlers/createCategoryHandler.js');

const categoryRouter = Router();

categoryRouter.post('/',addCategoryHandler);

module.exports = categoryRouter;