const {Review,} = require('../../db.js');

const postProductReviewByUserController = async (productId,userId,description) =>{
    const newReview = await Review.create({description});
    newReview.setUser(userId);
    newReview.setProduct(productId);
    return newReview;
};

module.exports = postProductReviewByUserController;