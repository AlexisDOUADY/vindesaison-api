'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('users', 'rank_id',
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: 'ranks',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    })
  },

  down: (queryInterface) =>
  {
    return queryInterface.removeColumn('users', 'rank_id');
  }
};
