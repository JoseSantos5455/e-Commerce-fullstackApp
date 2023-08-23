const {addCategory} =require ('../../controllers/categoriesControllers/addCategoryController');

const addCategoryHandler = async(req,res)=>{
    const {name} = req.body;
    try {
        res.status(200).json(await addCategory(name));
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = addCategoryHandler;