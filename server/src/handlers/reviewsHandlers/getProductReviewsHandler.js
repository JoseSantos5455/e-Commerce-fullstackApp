const getProductReviewsController = require('../../controllers/reviewsControllers/getProductReviewsController.js');

const getProductReviewsHandler = async(req,res)=>{
    const {productId} = req.params;
    const {userId} = req.query;
    try {
        const result = await getProductReviewsController(productId,userId);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProductReviewsHandler;