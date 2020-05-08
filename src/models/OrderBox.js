'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderBox = sequelize.define('OrderBox', {
    quantity: DataTypes.INTEGER,
  }, { modelName: 'order_box', tableName: 'orders_boxes' } );

  return OrderBox;
};
