const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isNull: {msg:`Category name couldn't be null`}
        }
    },
  },{timestamps:false});
};
