const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: {msg:`Category name couldn't be null`}
        }
    },
  },{timestamps:false});
};
