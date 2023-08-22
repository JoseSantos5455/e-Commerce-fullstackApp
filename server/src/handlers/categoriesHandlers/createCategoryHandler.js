const {addCategories} =require ('../controllers/categoriesControllers');

const addCategoriesHandler = async(req,res)=>{
    try {
        res.status(200).json(await addCategories());
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = addCategoriesHandler;