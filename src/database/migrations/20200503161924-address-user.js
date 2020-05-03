'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('addresses', 'user_id',
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
    return queryInterface.removeColumn('addresses', 'user_id');
  }
};
