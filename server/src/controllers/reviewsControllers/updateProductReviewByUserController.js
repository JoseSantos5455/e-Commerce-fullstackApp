const {Review} = require('../../db.js');

const updateProductReviewByUserController = async (reviewId,description)=>{
    const reviewToUpdate = await Review.findByPk(reviewId);
    if (!reviewToUpdate) throw new Error(`Review not found`);

    await reviewToUpdate.update({description: description});
    return reviewToUpdate;
};

module.exports = updateProductReviewByUserController;