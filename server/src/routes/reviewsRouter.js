const {Router} = require('express');
const getProductReviewsHandler = require ('../handlers/reviewsHandlers/getProductReviewsHandler.js');
const postProductReviewByUserHandler = require ('../handlers/reviewsHandlers/postProductReviewByUserhandler.js');
const updateProductReviewByUserHandler = require ('../handlers/reviewsHandlers/updateProductReviewByUserHandler.js');
const deleteProductReviewByUserHandler = require ('../handlers/reviewsHandlers/deleteProductReviewByUserHandler.js');
const reviewRouter = Router();

reviewRouter.get('/:productId',getProductReviewsHandler);
reviewRouter.post('/:orderId',postProductReviewByUserHandler);
reviewRouter.put('/:orderId',updateProductReviewByUserHandler);
reviewRouter.delete('/:orderId',deleteProductReviewByUserHandler);

module.exports = reviewRouter;