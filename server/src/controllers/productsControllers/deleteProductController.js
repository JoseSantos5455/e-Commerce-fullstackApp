const {Product} = require('../../db.js');

const deleteProductController = async (id)=>{
    const productToDelete = await Product.findByPk(id);
    if (!productToDelete) throw new Error("Product doesn't exist");

    await productToDelete.update({isActive: false});
    return productToDelete;
};

module.exports = deleteProductController;