const {Product,Category} = require("../../db");

const allProducts = async (whereConditions)=>{
  const productsAux=  await Product.findAll({
    where:whereConditions,
    include: [
      {
        model: Category,
        attributes: ['name'], 
      },
    ],
    attributes: { exclude: ['categoryId'] },
  });
  const products = productsAux.map(product => ({
      ...product.toJSON(),
      category: product.Category.name, // Agrega el nombre de la categoría como propiedad 'categoria'
      Category: undefined, // Elimina la propiedad Category si no es deseada
      })
  );
  return products;
};

const productsPaginated = async (page,size,whereConditions) => {
  const productsAux = await Product.findAndCountAll({
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
    }
  );
  const products = productsAux.rows.map(product => ({
      ...product.toJSON(),
      category: product.Category.name, // Agrega el nombre de la categoría como propiedad 'categoria'
      Category: undefined, // Elimina la propiedad Category si no es deseada
      })
  );
  return products;
};

const getAllProductsController= async (page,size,categoryFilter,brandFilter)=>{
  let products = [];
  const whereConditions = {};
  if (categoryFilter) whereConditions.categoryId = categoryFilter;
  if (brandFilter) whereConditions.brand = brandFilter;
  
  if (!page && !size) 
    products = await allProducts(whereConditions);
  else 
    products = await productsPaginated(page,size,whereConditions)
  return products;
}

module.exports = getAllProductsController;