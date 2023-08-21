const { Product, Category } = require("../../db")

const createProductController = async(name,description,price,stock,valoration,image,categoryId)=>{
 const newProductData ={
    name,
    description,
    price,
    stock,
    valoration,
    image,
 }
 const newProduct = await Product.create(newProductData);
 await newProduct.setCategory(categoryId)
 return newProduct;
}

module.exports={createProductController}