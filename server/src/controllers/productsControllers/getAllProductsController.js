const {Product} = require("../../db")

const getAllProductsController= async ()=>{
    const products = await Product.findAll()

    return products
}

module.exports = getAllProductsController