require ('dotenv').config();
const {Sequelize} = require('sequelize');
const categoryModel = require('../src/models/category');
<<<<<<< HEAD
const productModel = require('../src/models/product');
const reviewModel = require('../src/models/review');
const userModel = require('../src/models/user');
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native:false,
});
=======
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
 );
>>>>>>> bfc6893f3fb8a649d4b56f25afabbbb2c9f280f7

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
