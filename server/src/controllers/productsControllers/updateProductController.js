const {Product} = require('../../db.js');

const updateProductController = async(id,name,description,price,stock,valoration,image,categoryId)=>{
    const productToUpdate = await Product.findByPk(id);
    if (!productToUpdate) throw new Error("Product doesn't exist");

    const dataToUpdate = {
        name:name || productToUpdate.name,
        description:description || productToUpdate.description,
        price:price || productToUpdate,
        stock:stock || productToUpdate,
        valoration:valoration || productTo,
        image:image || productTo,
        categoryId:categoryId || productTo,    
    };
    const [rowsUpdated,[productUpdated]] = await Product.update(
        dataToUpdate,
        {where:{id:id},
         returning:true}
    );
    return productUpdated;      
};

module.exports = updateProductController;