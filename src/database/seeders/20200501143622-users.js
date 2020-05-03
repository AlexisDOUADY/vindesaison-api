'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 50;

module.exports = {
  up: (queryInterface) =>
  {
    let users =
    [{
      name: 'Vin de saison',
      lastname: 'Demo',
      email: 'demo@vds.fr',
      password: 'vds@demo2020',
      phone: '0658803100',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    for(let i = 0; i < amount; i++)
      users.push(
      {
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber('06########'),
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
