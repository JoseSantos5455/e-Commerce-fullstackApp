const {Product,Category} = require("../../db");
const {Op} = require('sequelize');

  const getProductByNameController = async (name,page,size,categoryFilter,brandFilter,orderBy,direction)=>{
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
    if (orderBy){
      let productsByNameSorted = [];
      if (orderBy==='price'){
        if (direction==='ascending') 
          productsByNameSorted=productsByName.sort((product1, product2) =>product1.price - product2.price);
        else  
          productsByNameSorted=productsByName.sort((product1, product2) =>product2.price - product1.price)
      }
      else{
        if (direction==='ascending') 
          productsByNameSorted=productsByName.sort((product1, product2) =>product1.valoration - product2.valoration);
        else  
          productsByNameSorted=productsByName.sort((product1, product2) =>product2.valoration - product1.valoration)
      };
      return productsByNameSorted;
    };
    return productsByName;
};

module.exports =  getProductByNameController;