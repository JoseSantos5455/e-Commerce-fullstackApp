const { createProductController } = require("../../controllers/productsControllers/createProductController")
const { Category }= require("../../db")

const createProductHandler = async(req,res)=>{
    const {name,description,price,stock,valoration,image,category}= req.body;

    const foundCategory = await category.findOne({where: {name: category}});
    const categoryId= foundCategory ? foundCategory.id : null;
    try {
        const result = await createProductController(name,description,price,stock,valoration,image,categoryId)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={createProductHandler}