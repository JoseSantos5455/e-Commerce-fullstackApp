const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {msg:'Name could not be null'}
            },    
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {msg:'Last Name could not be null'}
            },
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {msg:'Country could not be null'}
            },
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail: {
                    args: true,
                    msg:'Invalid e-mail format'},
                notEmpty:{
                    args:true,
                    msg:`E-mail couln't be empty`
                },    
            },
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:{
                    args:[6,10],
                    msg:`Pasword must be between 6 and 10 characters`,
                },
                isStrongPassword(value) {
                    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)) {
                        throw new Error(`Password must contain at least one lowercase letter, 
                        one uppercase letter, one digit, and one special character`)};
                },
            }, 
        },
        profile:{
            type:DataTypes.ENUM('Administrator','User'),
            allowNull:false,
            defaultValue:'User',
        },  
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        },    
    },{timestamps:false});
};