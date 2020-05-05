'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const uuid = require('short-uuid');
const amount = 50;

module.exports = {
  up: (queryInterface) =>
  {
    let users =
    [
      {
        name: 'Vin de saison',
        lastname: 'Demo',
        email: 'alexis.douady@gmail.com',
        password: 'vds@demo2020',
        phone: '0658803100',
        rank_id: 1,
        ref: uuid('0123456789').new().slice(0, 6),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vin de saison',
        lastname: 'Admin',
        email: 'alexis.douady@viacesi.fr',
        password: 'vds@admin2020',
        phone: '0658803100',
        rank_id: 2,
        ref: uuid('0123456789').new().slice(0, 6),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    for(let i = 0; i < amount; i++)
      users.push(
      {
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber('06########'),
        rank_id: 1,
        ref: uuid('0123456789').new().slice(0, 6),
        createdAt: faker.date.recent(),
        updatedAt: new Date()
      })

    return queryInterface.bulkInsert('users', users)
  },

  down: () =>
  {
    return SequelizeUtils.truncateTable('users');
  }
};
