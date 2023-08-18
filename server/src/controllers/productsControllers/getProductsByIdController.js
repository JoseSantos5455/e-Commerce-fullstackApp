const {Product, Category} = require('../../db')



export default  getProductByIdController = async (id) => {
  const product  = await Product.findByPk( id, {
    include: {
      model: Category,
      attributes: ["name"], 
    },
  });
    return product;
  };

