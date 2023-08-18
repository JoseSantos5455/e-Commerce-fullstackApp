require ('dotenv').config();
const {Sequelize} = require('sequelize');
const categoryModel = require('../src/models/category');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
 );

categoryModel(sequelize);
productModel(sequelize);
reviewModel(sequelize);
userModel(sequelize);

const {Category,Product,Review,User} = sequelize.models;

Product.belongsToMany(User,{through:'product_user'});
User.belongsToMany(Product,{through:'product_user'});
User.hasMany(Review);
Review.belongsTo(User);
Product.belongsTo(Category,{foreignKey:'categoryId'});
Category.hasMany(Product,{foreignKey:'categoryId'});
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {...sequelize.models,
                    conn:sequelize}
