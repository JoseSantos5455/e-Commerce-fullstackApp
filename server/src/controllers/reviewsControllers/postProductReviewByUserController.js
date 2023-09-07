const {Review,Product} = require('../../db.js');
const getOrderByIdController = require('../ordersControllers/getOrderByIdController.js');
const getProductReviewsController = require('../reviewsControllers/getProductReviewsController.js');

const postProductReviewByUserController = async (orderId,productId,userId,description,valoration) =>{
    const order = await getOrderByIdController(orderId);
    if (!order) throw new Error('Order not found');
    if (order.status!=='delivered') throw new Error("Can't make a review of the products have not been delivered");
    const productFound = order.orderDetails.some(product=>product.productId===productId);
    if (!productFound) throw new Error('Product not found');
    let reviews = await getProductReviewsController(productId,undefined).length;
    if (!reviews) reviews =1;
    const product = await Product.findByPk(productId);
    const newValoration = Math.round((product.valoration * reviews + valoration) / (reviews +1));
    const newReview = await Review.create({description});
    console.log(userId)
    newReview.setUser(userId);
    newReview.setProduct(productId);
    Product.update({valoration:newValoration},{where:{id:productId}});
    return {newReview,newValoration};
};

module.exports = postProductReviewByUserController;