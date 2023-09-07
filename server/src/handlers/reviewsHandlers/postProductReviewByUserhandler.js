const postProductReviewByUserController = require ('../../controllers/reviewsControllers/postProductReviewByUserController.js');

const postProductReviewByUserHandler = async (req,res)=>{
    const {orderId} = req.params;
    const {userId,productId} = req.query;
    const {description,valoration} = req.body;
    try {
        const result = await postProductReviewByUserController(orderId,productId,userId,description,valoration);
        res.status(200).json(result);    
    } 
    catch (error) {
        // res.status(400).json('Error csv');
        res.status(400).json({error:error.message});
    }
};

module.exports = postProductReviewByUserHandler;