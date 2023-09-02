require ('dotenv').config();
const {Sequelize} = require('sequelize');
const categoryModel = require('../src/models/category');
const productModel = require('../src/models/product');
const reviewModel = require('../src/models/review');
const userModel = require('../src/models/user');
const orderModel= require('../src/models/order');
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native:false,
});

categoryModel(sequelize);
productModel(sequelize);
reviewModel(sequelize);
userModel(sequelize);
orderModel(sequelize);

const {Category,Product,Review,User,Order} = sequelize.models;

Product.belongsToMany(User,{through:Order,foreignKey:'productId',otherKey:'userId'});
User.belongsToMany(Product,{through:Order,foreignKey:'userId',otherKey:'productId'});
User.hasMany(Review);
Review.belongsTo(User);
Product.belongsTo(Category,{foreignKey:'categoryId'});
Category.hasMany(Product,{foreignKey:'categoryId'});
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {...sequelize.models,
                    conn:sequelize}
