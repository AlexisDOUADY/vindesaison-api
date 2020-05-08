'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const uuid = require('short-uuid');
const amount = 200;

module.exports = {
  up: (queryInterface) =>
  {
    let orders = []

    for(let i = 0; i < amount; i++)
        orders.push(
        {
            ref: uuid('0123456789').new().slice(0, 6),
            state_id: faker.random.number({ min: 1, max: 3 }),
            delivery_address_id: faker.random.number({ min: 1, max: 100 }),
            bill_address_id: faker.random.number({ min: 1, max: 100 }),
            user_id: faker.random.number({ min: 1, max: 52 }),
            createdAt: faker.date.recent(31),
            updatedAt: new Date()
        })

    return queryInterface.bulkInsert('orders', orders)
  },

  down: () =>
  {
    return SequelizeUtils.truncateTable('orders');
  }
};
