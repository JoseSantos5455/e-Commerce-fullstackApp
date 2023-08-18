const {Product} = require("../../db")

export default  getAllProductsController = async ()=>{
    const products = await Product.findAll()

    return products
}

