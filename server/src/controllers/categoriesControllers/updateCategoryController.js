const {Category} =require('../../db.js');

const updateCategoryController = async (id,name) => {
    const categoryToUpdate = await Category.findByPk(id);
    if (!categoryToUpdate) throw new Error("Category doesn't exist");

    await categoryToUpdate.update({name:name});
    return categoryToUpdate;
};

module.exports = updateCategoryController;
