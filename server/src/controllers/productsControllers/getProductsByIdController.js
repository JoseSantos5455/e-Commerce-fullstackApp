const {Product, Category} = require('../../db')



const getProductByIdController = async (id) => {
  const product  = await Product.findByPk( id, {
    include: {
      model: Category,
      attributes: ["name"], 
    },
  });
    return product;
  };

  module.exports = getProductByIdController