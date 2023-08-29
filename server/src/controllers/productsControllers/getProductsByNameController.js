const {Product,Category} = require("../../db");
const {Op} = require('sequelize');

  const getProductByNameController = async (name,page,size,categoryFilter,brandFilter)=>{
    size=size||12;
    page=page||0;
    const whereConditions = {name:{[Op.iLike]:`%${name}%`}};
    if (categoryFilter) whereConditions.categoryId = categoryFilter;
    if (brandFilter) whereConditions.brand = brandFilter;
    const productList = await Product.findAndCountAll({
            limit:size,
            offset:page * size,
            where:whereConditions,
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
        category: product.Category.name, 
        Category: undefined, 
        })
    );
    return productsByName;
}

module.exports =  getProductByNameController;