require('dotenv').config();
const {Category} = require('../../db.js');

const fakeCategories = [
                    // {name:'Computadoras PC'},
                    {name:'Laptops'},
                    {name:'Peripherals'},
                    {name:'Graphics Card'},
                    {name:'Others'},
                    {name:'Mouse'},
                    {name:'Accessories'},
                    {name:'Furniture'},
                    {name:'Routers'},
                    {name:'Cooling'},
                    {name:'Storage'},
                    {name:'Case'},
                    {name:'Monitor'},
                    {name:'Keyboard'},
                    {name:'Power Supply'},                  
                    {name:'Motherboard'},
                    {name:'RAM'},
                    {name: 'Audio'}];

const addCategories = async()=>{
    const categories = await Category.bulkCreate(fakeCategories);
    return categories;
};

const addCategory = async(name)=>{
    const category = await Category.create({name: name});
    return category;
};

module.exports = {addCategories,addCategory};


