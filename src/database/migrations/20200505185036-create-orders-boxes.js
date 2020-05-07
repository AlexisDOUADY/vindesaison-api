'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders_boxes', {
      box_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:
            {
              model: 'boxes',
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders_boxes');
  }
};
