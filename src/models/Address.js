'use strict';

module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    city: DataTypes.STRING,
    postalcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    instructions: DataTypes.TEXT
  }, { modelName: 'address', tableName: 'addresses' } );

  Address.associate = function(models)
  {
    Address.belongsTo(models.User, { as: 'user', foreignKey: { name: 'user_id' } });
  }

  return Address;
};
