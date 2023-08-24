const updateCategoryController = require('../../controllers/categoriesControllers/updateCategoryController.js');

const updateCategoryHandler = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const result = await updateCategoryController(id,name);
        res.status(201).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = updateCategoryHandler;