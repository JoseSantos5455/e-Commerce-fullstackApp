const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        description:{
            type:DataTypes.STRING,
            allowNul:false,
        },
    },{timestamps:false});
};