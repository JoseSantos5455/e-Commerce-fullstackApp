const {Review} = require('../../db.js');

const updateProductReviewByUserController = async (productId,userId,description)=>{
    const reviewToUpdate = await Review.findOne({
        where:{
            productId: productId,
            userId: userId,
        },
    });
    if (!reviewToUpdate) throw new Error(`Review not found`);

    await reviewToUpdate.update({description: description});
    return reviewToUpdate;
};

module.exports = updateProductReviewByUserController;