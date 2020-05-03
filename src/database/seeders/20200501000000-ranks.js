'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');

module.exports = {
  up: (queryInterface) => {

    let ranks = [
      {
        name: 'User',
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      }
    ];

    return queryInterface.bulkInsert('ranks', ranks)
  },

  down: () => {
    return SequelizeUtils.truncateTable('ranks');
  }
};
