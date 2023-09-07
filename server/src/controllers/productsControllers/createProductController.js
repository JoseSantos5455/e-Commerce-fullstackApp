const { Product } = require("../../db")

const createProductController = async(name,description,price,stock,valoration,image,categoryId, brand)=>{
   const newProductData ={
    name,
    description,
    price,
    stock,
    valoration,
    image,
    categoryId,
    brand
 }
 const newProduct = await Product.create(newProductData);
 await newProduct.setCategory(categoryId)
 return newProduct;
}

module.exports= createProductController;