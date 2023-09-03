const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('orderDetail',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        subTotal:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
        },
    },{timestamps:false});
};