'use strict';
module.exports = (sequelize, DataTypes) => {
  var order - table = sequelize.define('order-table', {
    id: DataTypes.INT,
    id_user: DataTypes.INT,
    totalprice: DataTypes.INT
  }, {});
  order - table.associate = function(models) {
    // associations can be defined here
  };
  return order - table;
};