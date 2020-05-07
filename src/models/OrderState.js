'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderState = sequelize.define('OrderState', {
    name: DataTypes.STRING
  }, { modelName: 'order_state', tableName: 'order_states' } );

  OrderState.associate = function(models)
  {

  }

  return OrderState;
};
