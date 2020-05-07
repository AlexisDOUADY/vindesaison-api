'use strict';

const SequelizeUtils = require('../../helpers/sequelizeHelper');
const faker = require('faker');
const amount = 200;

module.exports = {
  up: (queryInterface) =>
  {
    let boxes = []

    for(let i = 1; i <= amount; i++)
    {
      let done = [];

      for(let r = 0; r < faker.random.number({ min: 0, max: 2 }); r++)
      {
        let boxId = faker.random.number({ min: 1, max: 2 });

        if(done.includes(boxId))
          continue;

        done.push(boxId);

        boxes.push(
            {
              order_id: i,
              box_id: boxId,
            })
      }
    }

    return queryInterface.bulkInsert('orders_boxes', boxes)
  },

  down: () =>
  {
    return SequelizeUtils.truncateTable('orders_boxes');
  }
};
