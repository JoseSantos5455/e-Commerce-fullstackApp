const deleteProductController = require('../../controllers/productsControllers/deleteProductController.js');

const deleteProductHandler = async (req,res)=>{
    const {id} = req.params;

    try {
        const result = await deleteProductController(id);
        res.status(200).json(result);    
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
}; 

module.exports = deleteProductHandler;