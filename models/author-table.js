'use strict';
module.exports = (sequelize, DataTypes) => {
  var author - table = sequelize.define('author-table', {
    id: DataTypes.INT,
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    amount: DataTypes.INT
  }, {});
  author - table.associate = function(models) {
    // associations can be defined here
  };
  return author - table;
};