const {Review} = require('../../db.js');

const deleteProductReviewByUserController = async (reviewId)=>{
    const reviewToDelete = await Review.findByPk(reviewId);
    if (!reviewToDelete) throw new Error(`Review not found`);
    
    await reviewToDelete.update({isActive:false});
    return reviewToDelete;
};

module.exports = deleteProductReviewByUserController;
