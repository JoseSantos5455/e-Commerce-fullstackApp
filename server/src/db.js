require ('dotenv').config();
const {Sequelize} = require('sequelize');
const categoryModel = require('../src/models/category');
const productModel = require('../src/models/product');
const reviewModel = require('../src/models/review');
const userModel = require('../src/models/user');
const orderModel= require('../src/models/order');
const orderDetailModel = require('../src/models/orderDetail');
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,DATABASE_PRIVATE_URL } =  process.env
const sequelize = new Sequelize(`${DATABASE_PRIVATE_URL}`,
{
    logging: false,
    native:false,
});

categoryModel(sequelize);
productModel(sequelize);
reviewModel(sequelize);
userModel(sequelize);
orderModel(sequelize);
orderDetailModel(sequelize); 

const {Category,Product,Review,User,Order,orderDetail} = sequelize.models;

User.hasMany(Review,{foreignKey:'userId'});
Review.belongsTo(User,{foreignKey:'userId'});
Category.hasMany(Product,{foreignKey:'categoryId'});
Product.belongsTo(Category,{foreignKey:'categoryId'});
Product.hasMany(Review,{foreignKey:'productId'});
Review.belongsTo(Product,{foreignKey:'productId'});
User.hasMany(Order,{foreignKey:'userId'});
Order.belongsTo(User,{foreignKey:'userId'});
Product.belongsToMany(Order, { through: 'orderDetail', foreignKey: 'productId' });
Order.belongsToMany(Product, { through: 'orderDetail', foreignKey: 'orderId' });
Order.hasMany(orderDetail,{foreignKey:'orderId'});
orderDetail.belongsTo(Order,{foreignKey:'orderId'});
Product.hasMany(orderDetail,{foreignKey:'productId'});
orderDetail.belongsTo(Product,{foreignKey:'productId'});

module.exports = {...sequelize.models,
                    conn:sequelize}
