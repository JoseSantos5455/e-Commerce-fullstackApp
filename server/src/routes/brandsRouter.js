const {Router} = require('express');
const getAllBrandsHandler = require('../handlers/brandsHandlers/getAllBrandsHandler.js');

const brandsRouter = Router();

brandsRouter.get('/',getAllBrandsHandler);

module.exports = brandsRouter;