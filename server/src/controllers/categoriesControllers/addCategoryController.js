require('dotenv').config();
const {Category} = require('../../db.js');

const fakeCategories = [
                        {name:'Computadoras PC'},
                        {name:'Laptops'},
                        {name:'Perifericos'}]; 

const addCategories = async()=>{
    const categories = await Category.bulkCreate(fakeCategories);
    return categories;
};

const addCategory = async(name)=>{
    const category = await Category.create({name: name});
    return category;
};

module.exports = {addCategories,addCategory};


