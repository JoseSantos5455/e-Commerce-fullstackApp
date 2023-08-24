const {Product,Category} = require("../../db")

const getAllProductsController= async (page,size)=>{
    const productList = await Product.findAndCountAll({
        limit:size,
        offset:page * size,
        include: [
            {
              model: Category,
              attributes: ['name'], 
            },
          ],
          attributes: { exclude: ['categoryId'] },
        }
        );
    const products = productList.rows.map(product => ({
        ...product.toJSON(),
        category: product.Category.name, // Agrega el nombre de la categoría como propiedad 'categoria'
        Category: undefined, // Elimina la propiedad Category si no es deseada
        })
    );
    return products;
}

module.exports = getAllProductsController;