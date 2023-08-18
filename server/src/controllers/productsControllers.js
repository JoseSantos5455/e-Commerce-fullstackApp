require ('dotenv').config();
const {Product,Category} = require('../db.js');

const fakeProducts = [
                        {name:'PC HP 4503',
                        description:'PC de escritorio 8GB RAM, SSD 1TB, CORE I7',
                        price:2545.00,
                        valoration:1,
                        image:'fake.com/pc.png',
                        isActive:true,
                        category:'Computadoras PC'},
                        {name:'LAPTOP ACER 4876',
                        description:'LAPTOP ACER 16GB RAM, SSD 500 GB, RYZEN5',
                        price:1900.00,
                        valoration:3,
                        image:'fake2.com/pc.png',
                        isActive:true,
                        category:'Laptops'},
                        {name:'TECLADO GAMER DELL',
                        description:'TECLADO Dell 102 teclas, ergonómico, gamer',
                        price:150.50,
                        valoration:4,
                        image:'fake3.com/pc.png',
                        isActive:true,
                        category:'Perifericos'},
                        {name:'PC COMPAQ 1003',
                        description:'PC de escritorio 16GB RAM, HD 2TB, CORE I5',
                        price:2005.00,
                        valoration:2,
                        image:'fake4.com/pc.png',
                        isActive:true,
                        category:'Computadoras PC'},
                    ];

      
    const getCategoryId = async (category)=>{
        const id = await Category.findOne({
                where:{name:category},
                attributes:['id']
        });
        if (id) return id;
        else throw new Error('Category doesn´t exist ' + category);
    };                
    const createProduct = async ({name,description,price,valoration,image,isActive,categoryId})=>{
    const newProduct = await (Product.create({
                            name,
                            description,
                            price,
                            valoration,
                            image,
                            isActive,
                            categoryId,
                        }));
};                 

const createProducts = async () => {
    for (const fakeProduct of fakeProducts) {
      const catId = await getCategoryId(fakeProduct.category);
      await createProduct({ ...fakeProduct, categoryId: catId.id });
    }
  };

const getAllProducts = async ()=> {
    const products = await Product.findAll();/*
                attributes:['id','name','description','price','valoration','image','isActive'],
                include:{
                       model:Category,
                       attributes:['name'],
                       through:{attributes:[]} 
                }
    });*/
    return products;
};  

module.exports = {createProducts,getAllProducts};