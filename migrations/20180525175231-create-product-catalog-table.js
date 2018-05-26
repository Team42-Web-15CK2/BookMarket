'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product-catalog-tables', {
      id_catalog: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'catalog-tables',
          key: 'id'
        }
      },
      id_product: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'product-tables',
          key: 'id'
        }
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
    return queryInterface.dropTable('product-catalog-tables');
  }
};
