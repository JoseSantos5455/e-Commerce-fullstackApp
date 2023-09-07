const  createProductController  = require("../../controllers/productsControllers/createProductController")
const { Category }= require("../../db")

const createProductHandler = async(req,res)=>{
    const {name,description,price,stock,valoration,image,categoryId, brand}= req.body;

    try {
        const result = await createProductController(name,description,price,stock,valoration,image, categoryId, brand)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createProductHandler;