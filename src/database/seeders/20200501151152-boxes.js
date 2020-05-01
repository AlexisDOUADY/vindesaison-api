'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 2;


module.exports = {
  up: (queryInterface) => {

    let boxes = [];

    for(let i = 0; i < amount; i++)
      boxes.push(
          {
            name: faker.commerce.productName(),
            description: faker.lorem.text(),
            price: faker.random.number({ min: 10, max:50 }),
            createdAt: faker.date.recent(),
            updatedAt: new Date()
          })

    return queryInterface.bulkInsert('boxes', boxes)
  },

  down: () => {
    return SequelizeUtils.truncateTable('boxes');
  }
};
