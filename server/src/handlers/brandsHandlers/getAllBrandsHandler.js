const getAllBrandsController = require('../../controllers/brandsControllers/getAllBrandsController.js');

const getAllBrandsHandler = async(req,res)=>{
    try {
        const result = await getAllBrandsController();
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getAllBrandsHandler;