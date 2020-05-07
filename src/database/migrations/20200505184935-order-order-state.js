'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('orders', 'state_id',
        {
          type: Sequelize.INTEGER,
          references:
              {
                model: 'order_states',
                key: 'id'
              },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
  },

  down: (queryInterface) =>
  {
    return queryInterface.removeColumn('orders', 'state_id');
  }
};
