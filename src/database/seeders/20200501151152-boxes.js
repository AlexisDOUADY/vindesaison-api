'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const uuid = require('short-uuid');

module.exports = {
  up: (queryInterface) => {

    let boxes = [
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Une box',
            description: 'Remplie de bonnes choses',
            price: 15,
            image: '6d85172a-a6b9-40f8-975e-683ba9877775.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        },
        {
            ref: uuid('0123456789').new().slice(0, 6),
            name: 'Une autre box',
            description: 'Mais plus chère',
            price: 20,
            image: '6d85172a-a6b9-40f8-975e-683ba9877775.png',
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        }
    ];

    return queryInterface.bulkInsert('boxes', boxes)
  },

  down: () => {
    return SequelizeUtils.truncateTable('boxes');
  }
};
