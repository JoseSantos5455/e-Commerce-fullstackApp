const {Router} = require('express');
const addCategoryHandler = require('../handlers/categoriesHandlers/createCategoryHandler.js');
const getAllCategoriesHandler = require('../handlers/categoriesHandlers/getAllCategoriesHandler.js');

const categoryRouter = Router();

categoryRouter.get('/',getAllCategoriesHandler);
categoryRouter.post('/',addCategoryHandler);

module.exports = categoryRouter;