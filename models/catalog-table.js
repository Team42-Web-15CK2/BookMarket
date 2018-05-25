'use strict';
module.exports = (sequelize, DataTypes) => {
  var catalog - table = sequelize.define('catalog-table', {
    id: DataTypes.INT,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    amount: DataTypes.INT
  }, {});
  catalog - table.associate = function(models) {
    // associations can be defined here
  };
  return catalog - table;
};