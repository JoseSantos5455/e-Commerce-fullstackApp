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
        price:{
            type:DataTypes.DECIMAL(10,2),

            allowNull:false,
            validate:{
                notEmpty:{
                    msg:`Product's price couldn't be null`
                },
            },
        },
        image:{

        },
        shipping:{

        },
        color:{},
        stock:{
            type: DataTypes.INTEGER,
            defaultValue:0,
            min:0,
        },    
        valoration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 0,
              max: 5,
              isInt: {
                msg: 'Rating must be an integer value between 0 and 5',
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
        /*shipping:{
            type:DataTypes.INTEGER,
            max:30,
            min:3,
        },*/
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        },
        categoryId:{
<<<<<<< HEAD
            type:DataTypes.INTEGER,
            allowNull:true,
=======
            type:DataTypes.UUID,
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
        extras:{//listado de características de un producto ej. de un TV [2 puetos hdmi, sonido suround, etc]
            type:DataTypes.ARRAY,
>>>>>>> 12c82996ecb66cc2660ebbf5d729d7ef5c188012
        },
    },{timestamps:false});
};
