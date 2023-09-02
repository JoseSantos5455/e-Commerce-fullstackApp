const updateProductReviewByUserController = require('../../controllers/reviewsControllers/updateProductReviewByUserController.js');

const updateProductReviewByUserHandler = async (req,res) => {
    const {productId}= req.params;
    const {userId} = req.query;
    const {description} = req.body;
    try {
        const result = await updateProductReviewByUserController(productId, userId,description);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message}); 
    }
};

module.exports = updateProductReviewByUserHandler;