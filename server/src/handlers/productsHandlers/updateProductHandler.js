const updateProductController = require('../../controllers/productsControllers/updateProductController.js');

const updateProductHandler = async(req,res)=>{
    const {id} = req.params;
    // console.log(productId);
    const {name,description,price,stock,valoration,image,categoryId}= req.body;
    
    try {
        const result = await updateProductController(id,name,description,price,stock,valoration,image,categoryId);    
        res.status(201).json(result);
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = updateProductHandler;