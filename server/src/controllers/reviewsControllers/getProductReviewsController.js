const {Review} = require('../../db.js');

const getProductReviewsController = async (id)=>{
    const reviews = await Review.findAll({where:{productId:id}});
    return reviews;
};

module.exports = getProductReviewsController;