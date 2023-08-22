const {Product} = require("../../db")

const getAllProductsController= async (page,size)=>{
    const products = await Product.findAndCountAll({
        limit:size,
        offset:page * size
    });
    return products
}

module.exports = getAllProductsController