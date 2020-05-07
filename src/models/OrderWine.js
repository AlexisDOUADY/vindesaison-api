'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderWine = sequelize.define('OrderWine', {
    quantity: DataTypes.INTEGER,
  }, { modelName: 'order_wine', tableName: 'orders_wines' } );

  return OrderWine;
};
