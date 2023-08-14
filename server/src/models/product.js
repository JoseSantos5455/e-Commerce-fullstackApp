const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Product',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:{
                    msg:`Product's name couldn't be null`
                },
            },
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:{
                    msg:`Product's description couldn't be null`
                },
            },
        },
        price:{///considerar un key para el tipo de moneda????
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            validate:{
                notEmpty:{
                    msg:`Product's price couldn't be null`
                },
            },
        },
        stock:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            min:0,  
        },
        valoration:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                min:{
                    args:0,
                    msg:'Rating must be a number greater or equal to zero',
                }, 
                max:{
                    args:5,
                    msg:'Rating must be a number greater or equal to zero'
                },
            },
        },
        characteristics:{//listado de características de un producto ej. de un TV [2 puetos hdmi, sonido suround, etc]
            type:DataTypes.ARRAY,
        },
    },{timestamps:false});
};