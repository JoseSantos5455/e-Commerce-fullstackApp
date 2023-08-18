
const getAllProductsController = require ('../../controllers/productsControllers/getAllProductsController')
const getProductByNameController = require ('../../controllers/productsControllers/getProductByNameController')


export default  getProductsHandler = async(req,res)=>{
    const { name }= req.query;
    
    try {
        if(name){
            const result = await getProductByNameController(name);
            res.status(200).json(result)
        }
        else{
            const result = await getAllProductsController();
            res.status(200).json(result)
        }
    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

