const getProductReviewsController = require('../../controllers/reviewsControllers/getProductReviewsController.js');

const getProductReviewsHandler = async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await getProductReviewsController(id);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProductReviewsHandler;