'use strict';
module.exports = (sequelize, DataTypes) => {
  var orderdetail - table = sequelize.define('orderdetail-table', {
    id: DataTypes.INT,
    id_order: DataTypes.INT,
    product_id: DataTypes.INT,
    product_name: DataTypes.STRING,
    product_price: DataTypes.INT,
    quantity: DataTypes.INT,
    total: DataTypes.INT
  }, {});
  orderdetail - table.associate = function(models) {
    // associations can be defined here
  };
  return orderdetail - table;
};