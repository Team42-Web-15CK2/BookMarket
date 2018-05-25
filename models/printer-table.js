'use strict';
module.exports = (sequelize, DataTypes) => {
  var printer - table = sequelize.define('printer-table', {
    id: DataTypes.INT,
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    amount: DataTypes.INT
  }, {});
  printer - table.associate = function(models) {
    // associations can be defined here
  };
  return printer - table;
};