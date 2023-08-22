const {Product} = require("../../db")

  const getProductsByNameController = async (name)=>{
    const productsByName = await Product.findAll(
        {where:
            {name:name}}
        );

    return productsByName
}

module.exports =  getProductsByNameController