'use strict';
module.exports = (sequelize, DataTypes) => {
  var product - table = sequelize.define('product-table', {
    id: DataTypes.INT,
    name: DataTypes.STRING,
    id_author: DataTypes.INT,
    id_printer: DataTypes.INT,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    appearance: DataTypes.DATE,
    price: DataTypes.INT
  }, {});
  product - table.associate = function(models) {
    // associations can be defined here
  };
  return product - table;
};