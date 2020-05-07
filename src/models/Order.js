'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    ref: DataTypes.STRING,
  }, { modelName: 'order', tableName: 'orders' } );

  Order.associate = function(models)
  {
    Order.belongsTo(models.OrderState, { as: 'state', foreignKey: { name: 'state_id' } })
    Order.belongsTo(models.Address, { as: 'delivery_address', foreignKey: { name: 'delivery_address_id' } })
    Order.belongsTo(models.Address, { as: 'bill_address', foreignKey: { name: 'bill_address_id' } })
    Order.belongsTo(models.User, { as: 'user', foreignKey: { name: 'user_id' } })
    Order.belongsToMany(models.Wine, { as: 'wines', through: models.OrderWine, foreignKey: 'order_id', otherKey: 'wine_id' })
    Order.belongsToMany(models.Box, { as: 'boxes', through: 'orders_boxes', foreignKey: 'order_id', otherKey: 'box_id' })
  }

  return Order;
};
