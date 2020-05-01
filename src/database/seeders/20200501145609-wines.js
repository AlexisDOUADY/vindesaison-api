'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 50;


module.exports = {
  up: (queryInterface) => {

    let wines = [];

    for(let i = 0; i < amount; i++)
      wines.push(
          {
            name: faker.commerce.productName(),
            description: faker.lorem.text(),
            price: faker.random.number({ min: 5, max: 20 }),
            createdAt: faker.date.recent(),
            updatedAt: new Date()
          })

    return queryInterface.bulkInsert('wines', wines)
  },

  down: () => {
    return SequelizeUtils.truncateTable('wines');
  }
};
