const {Review} = require('../../db.js');

const deleteProductReviewByUserController = async (productId,userId)=>{
    const reviewToDelete = await Review.findOne({
        where:{
            productId: productId,
            userId: userId
        },
    });
    if (!reviewToDelete) throw new Error(`Review not found`);
    await reviewToDelete.update({isActive:false});
    return reviewToDelete;
};

module.exports = deleteProductReviewByUserController;