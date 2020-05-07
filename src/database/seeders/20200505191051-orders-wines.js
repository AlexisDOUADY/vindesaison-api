'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 200;

module.exports = {
  up: (queryInterface) =>
  {
    let wines = []

    for(let i = 1; i <= amount; i++)
    {
      let done = [];

      for(let r = 0; r < faker.random.number({ min: 1, max: 12 }); r++)
      {
        let wineId = faker.random.number({ min: 1, max: 12 });

        if(done.includes(wineId))
          continue;

        done.push(wineId);
        wines.push(
            {
              order_id: i,
              wine_id: wineId,
              quantity: faker.random.number({ min: 1, max: 3 }),
            })
      }
    }

    return queryInterface.bulkInsert('orders_wines', wines)
  },

  down: () =>
  {
    return SequelizeUtils.truncateTable('orders_wines');
  }
};
