'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment-table', {
    id_user: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};
