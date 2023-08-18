const {Product} = require("../../db")

  const getProductByNameController = async (name)=>{
    const productsByName = await Product.findAll(
        {where:
            {name:name}}
        );

    return productsByName
}

module.exports =  getProductByNameController