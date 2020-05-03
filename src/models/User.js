'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, { modelName: 'user', tableName: 'users' } );

  User.associate = function(models)
  {

  }

  return User;
};
