'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderdetail-tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INT
      },
      id_order: {
        type: Sequelize.INT
      },
      product_id: {
        type: Sequelize.INT
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.INT
      },
      quantity: {
        type: Sequelize.INT
      },
      total: {
        type: Sequelize.INT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orderdetail-tables');
  }
};