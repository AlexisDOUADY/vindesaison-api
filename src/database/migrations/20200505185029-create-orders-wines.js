'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders_wines', {
      wine_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:
            {
              model: 'wines',
              key: 'id'
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:
            {
              model: 'orders',
              key: 'id'
            },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: {
          type: Sequelize.INTEGER,
          defaultValue: 1,
          allowNull: false
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders_wines');
  }
};
