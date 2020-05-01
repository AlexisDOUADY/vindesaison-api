'use strict';

module.exports = (sequelize, DataTypes) => {
  let Box = sequelize.define('Box', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE
  }, { modelName: 'box', tableName: 'boxes' } );

  Box.associate = function(models)
  {

  }

  return Box;
};
