'use strict';
module.exports = (sequelize, DataTypes) => {
  let Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
  }, { modelName: 'wine', tableName: 'wines' } );

  Wine.associate = function(models)
  {

  }

  return Wine;
};
