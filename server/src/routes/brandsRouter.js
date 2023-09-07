const {Router} = require('express');
const getAllBrandsHandler = require('../handlers/brandsHandlers/getAllBrandsHandler.js');

const brandsRouter = Router();

brandsRouter.post('/',getAllBrandsHandler);

module.exports = brandsRouter;