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
//agregar producto,reseña,pedido y user, perfil

const {Category} = sequelize.models;

module.exports = {...sequelize.models,
                    conn:sequelize}

