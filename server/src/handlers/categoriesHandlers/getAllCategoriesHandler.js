const getAllCategoriesController = require('../../controllers/categoriesControllers/getAllCategoriesController.js');

const getAllCategoriesHandler = async (req,res)=>{
    try {
        const result = await getAllCategoriesController();
        res.status(200).json(result);  
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getAllCategoriesHandler;