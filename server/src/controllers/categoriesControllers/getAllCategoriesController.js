const {Category} = require('../../db.js');

const getAllCategoriesController = async ()=>{
    const categories = await (Category.findAll());
    return categories;
};

module.exports = getAllCategoriesController;