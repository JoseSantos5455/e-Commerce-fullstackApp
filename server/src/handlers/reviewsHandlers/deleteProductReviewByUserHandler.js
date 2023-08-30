const deleteProductReviewByUserController = require('../../controllers/reviewsControllers/deleteProductReviewByUserController.js');

const deleteProductReviewByUserHandler = async(req,res) =>{
    const {productId} = req.params;
    const {userId} = req.query;
    try {
        const result = await deleteProductReviewByUserController(productId, userId);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = deleteProductReviewByUserHandler;