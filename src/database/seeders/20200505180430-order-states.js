'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');

module.exports = {
  up: (queryInterface) => {

    let states = [
      {
        name: 'basket',
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      },
      {
        name: 'paid',
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      },
      {
        name: 'on_delivery',
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      }
    ];

    return queryInterface.bulkInsert('order_states', states)
  },

  down: () => {
    return SequelizeUtils.truncateTable('order_states');
  }
};
