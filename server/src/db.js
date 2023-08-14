require ('dotenv').config();
const {Sequelize} = require('sequelize');
const categoryModel = require('../src/models/category');
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

categoryModel(sequelize);
//agregar producto,reseña,pedido y user, perfil

const {Category} = sequelize.models;

module.exports = {...sequelize.models,
                    conn:sequelize}

