const {Review,} = require('../../db.js');
const getOrderByIdController = require('../ordersControllers/getOrderByIdController.js');

const postProductReviewByUserController = async (orderId,productId,userId,description) =>{
    const order = await getOrderByIdController(orderId);
    if (!order) throw new Error('Order not found');
    if (order.status!=='delivered') throw new Error("Can't make a review of the products have not been delivered");
    const productFound = order.orderDetails.some(product=>product.productId===productId);
    if (!productFound) throw new Error('Product not found');

    const newReview = await Review.create({description});
    newReview.setUser(userId);
    newReview.setProduct(productId);
    return newReview;
};

module.exports = postProductReviewByUserController;