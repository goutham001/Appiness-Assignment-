'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id_pk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      cat_id_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
          key: 'cat_id_pk'
        },

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product');
  }
};