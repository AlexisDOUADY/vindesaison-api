'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('orders', 'user_id',
        {
          type: Sequelize.INTEGER,
          references:
              {
                model: 'users',
                key: 'id'
              },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
  },

  down: (queryInterface) =>
  {
    return queryInterface.removeColumn('orders', 'user_id');
  }
};
