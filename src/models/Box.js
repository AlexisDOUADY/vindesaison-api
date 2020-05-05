'use strict';

module.exports = (sequelize, DataTypes) => {
  let Box = sequelize.define('Box', {
    ref: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
  }, { modelName: 'box', tableName: 'boxes' } );

  Box.associate = function(models)
  {

  }

  return Box;
};
