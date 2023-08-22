const {Product,Category} = require("../../db");
const {Op} = require('sequelize');

  const getProductByNameController = async (name,page,size)=>{
    const productList = await Product.findAndCountAll({
            limit:size,
            offset:page * size,
            where:{name:{[Op.iLike]:`%${name}%`}},
            include: [
              {
                model: Category,
                attributes: ['name'], 
              },
            ],
            attributes: { exclude: ['categoryId'] },
          });
    const productsByName = productList.rows.map(product => ({
        ...product.toJSON(),
        categoria: product.Category.name, 
        Category: undefined, 
        })
    );
    return productsByName
}

module.exports =  getProductByNameController;