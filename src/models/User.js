'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    ref: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, { modelName: 'user', tableName: 'users' } );

  User.associate = function(models)
  {
    User.belongsTo(models.Rank, { as: 'rank', foreignKey: { name: 'rank_id' } })
    User.hasMany(models.Address, { as: 'addresses', foreignKey: { name: 'user_id' } })
  }

  return User;
};
