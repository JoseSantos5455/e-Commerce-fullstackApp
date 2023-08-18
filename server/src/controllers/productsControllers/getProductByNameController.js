const {Product} = require("../../db")

export default  getProductByNameController = async (name)=>{
    const productsByName = await Product.findAll(
        {where:
            {name:name}}
        );

    return productsByName
}

