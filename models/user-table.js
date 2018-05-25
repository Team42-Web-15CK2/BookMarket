'use strict';
module.exports = (sequelize, DataTypes) => {
  var User - table = sequelize.define('User-table', {
    id: DataTypes.INT,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    account: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User - table.associate = function(models) {
    // associations can be defined here
  };
  return User - table;
};