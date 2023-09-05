const updateProductReviewByUserController = require('../../controllers/reviewsControllers/updateProductReviewByUserController.js');

const updateProductReviewByUserHandler = async (req,res) => {
    const {reviewId}= req.params;
    const {description} = req.body;
    try {
        const result = await updateProductReviewByUserController(reviewId,description);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message}); 
    }
};

module.exports = updateProductReviewByUserHandler;