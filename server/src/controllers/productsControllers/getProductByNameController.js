const Products = require("../../db")

const getProductByNameController = async (name)=>{
    const baseDatos = await Products.findAll({where:{name:name}});

    return [...baseDatos]
}

module.export={ getProductByNameController}