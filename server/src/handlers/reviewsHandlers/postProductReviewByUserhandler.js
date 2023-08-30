const postProductReviewByUserController = require ('../../controllers/reviewsControllers/postProductReviewByUserController.js');

const postProductReviewByUserHandler = async (req,res)=>{
    const {productId} = req.params;
    const {userId} = req.query;
    const {description} = req.body;
    try {
        const result = await postProductReviewByUserController(productId,userId,description,description);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json('Error csv');
        // res.status(400).json({error:error.message});
    }
};

module.exports = postProductReviewByUserHandler;