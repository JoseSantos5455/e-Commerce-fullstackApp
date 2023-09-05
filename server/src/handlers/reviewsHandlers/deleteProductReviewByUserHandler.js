const deleteProductReviewByUserController = require('../../controllers/reviewsControllers/deleteProductReviewByUserController.js');

const deleteProductReviewByUserHandler = async(req,res) =>{
    const {reviewId} = req.params;
    try {
        const result = await deleteProductReviewByUserController(reviewId);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = deleteProductReviewByUserHandler;