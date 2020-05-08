'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 100;

module.exports = {
  up: (queryInterface) =>
  {
    let addresses = []
    faker.locale = 'fr';

    for(let i = 0; i < amount; i++)
      addresses.push(
        {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            line1: faker.address.streetAddress('###'),
            line2: faker.address.secondaryAddress(),
            city: faker.address.city(),
            postalcode: faker.address.zipCode(),
            phone: faker.phone.phoneNumber('06########'),
            instructions: faker.lorem.sentence(),
            user_id: faker.random.number({ min: 1, max: 51 }),
            createdAt: faker.date.recent(),
            updatedAt: new Date()
        })

    return queryInterface.bulkInsert('addresses', addresses)
  },

  down: () =>
  {
    return SequelizeUtils.truncateTable('addresses');
  }
};
