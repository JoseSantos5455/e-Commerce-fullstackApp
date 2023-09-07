const {Review,User} = require('../../db.js');

const getProductReviewsController = async (productId,userId)=>{
    const whereConditions={productId: productId};
    if (userId) whereConditions.userId = userId;
    const reviews = await Review.findAndCountAll(
        {where:whereConditions,
        include:[
            {model:User,
             attributes:[[User.sequelize.literal(`"User"."name"`), 'userFullName']]}
        ]});
    const productReviews = reviews.rows.map(review=>{
                            return({...review.toJSON(),
                                    userFullName:review.User.dataValues.userFullName,
                                    User:undefined,
                                })});
    return productReviews;
};

module.exports = getProductReviewsController;