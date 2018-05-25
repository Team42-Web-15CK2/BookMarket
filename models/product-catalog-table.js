'use strict';
module.exports = (sequelize, DataTypes) => {
  var product - catalog - table = sequelize.define('product-catalog-table', {
    id_catalog: DataTypes.INT,
    id_product: DataTypes.INT
  }, {});
  product - catalog - table.associate = function(models) {
    // associations can be defined here
  };
  return product - catalog - table;
};