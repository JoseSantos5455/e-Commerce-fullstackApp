require('dotenv').config();
const {Category} = require('../db.js');

const fakeCategories = [
                        {name:'Computadoras PC'},
                        {name:'Laptops'},
                        {name:'Perifericos'}]; 

const addCategories = async()=>{
    console.log('entro a categorias')
    const categories = await Category.bulkCreate(fakeCategories);
    return categories;
};

module.exports = {addCategories};


