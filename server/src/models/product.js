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
            type: DataTypes.INTEGER,
            defaultValue:0,
            min:0,  
        },
        category:{
            type: DataTypes.STRING,
            allowNull: true
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
        image:{
            type:DataTypes.STRING,//array de imagenes
            allowNull:false,
            validate: {
                isUrl: true,
                isImageFormat(value) {
                  if (!/\.(png|jpg|jpeg)$/.test(value)) {
                    throw new Error('La URL debe ser una imagen PNG o JPG.');
                  }
                }
            }
        },
        
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        },
        categoryId:{
            type:DataTypes.UUID,
            allowNull:false,
        },
    },{timestamps:false});
};
