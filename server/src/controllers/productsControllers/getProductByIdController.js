const {Product, Category} = require('../../db')

const getProductByIdController = async (id) => {
  const productFound  = await Product.findByPk( id, {
    include: [
      {
        model: Category,
        attributes: ['name'], 
      },
    ],
    attributes: { exclude: ['categoryId'] },
  }
  );

  const product = {...productFound.toJSON(),
                  category: productFound.Category.name, 
                  Category: undefined, // Elimina la propiedad Category si no es deseada
    }

  return product;
  };

  module.exports = getProductByIdController