'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rank = sequelize.define('Rank', {
    name: DataTypes.STRING
  }, { modelName: 'rank', tableName: 'ranks' } );

  Rank.associate = function(models)
  {

  }
  return Rank;
};
