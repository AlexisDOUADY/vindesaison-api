'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('orders', 'delivery_address_id',
        {
          type: Sequelize.INTEGER,
          references:
              {
                model: 'addresses',
                key: 'id'
              },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
  },

  down: (queryInterface) =>
  {
    return queryInterface.removeColumn('orders', 'delivery_address_id');
  }
};
