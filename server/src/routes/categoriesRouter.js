const {Router} = require('express');
const addCategoryHandler = require('../handlers/categoriesHandlers/createCategoryHandler.js');
const getAllCategoriesHandler = require('../handlers/categoriesHandlers/getAllCategoriesHandler.js');
const updateCategoryHandler = require('../handlers/categoriesHandlers/updateCategoryHandler.js');

const categoryRouter = Router();

categoryRouter.get('/',getAllCategoriesHandler);
categoryRouter.post('/',addCategoryHandler);
categoryRouter.put('/:id',updateCategoryHandler);


module.exports = categoryRouter;