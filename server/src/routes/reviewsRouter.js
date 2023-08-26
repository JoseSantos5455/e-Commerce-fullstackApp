const {Router} = require('express');
const getProductReviewsHandler = require ('../handlers/reviewsHandlers/getProductReviewsHandler.js');
const postProductReviewByUserHandler = require ('../handlers/reviewsHandlers/postProductReviewByUserhandler.js');
const updateProductReviewByUserHandler = require ('../handlers/reviewsHandlers/updateProductReviewByUserHandler.js');

const reviewRouter = Router();

reviewRouter.get('/:productId',getProductReviewsHandler);//id corresponde a producto
reviewRouter.post('/:productId',postProductReviewByUserHandler);//id de user pasado por query
reviewRouter.put('/:productId',updateProductReviewByUserHandler);//id de user pasado por query
// reviewRouter.delete('/:id',getProductReviewByUserHandler);//id de user pasado por query

module.exports = reviewRouter;