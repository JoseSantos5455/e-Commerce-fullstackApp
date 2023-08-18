const {createProducts,getAllProducts} =require ('../controllers/productsControllers');

const getAllProductsHandler = async(req,res)=>{
    try {
        res.status(200).json(await getAllProducts());
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

const createProductsHandler = async(req, res) => {
    try {
        res.status(200).json(await createProducts())
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {createProductsHandler,getAllProductsHandler};