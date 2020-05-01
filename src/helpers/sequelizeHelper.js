const Sequelize = require('../models').sequelize

exports.truncateTable = (tableName) =>
{
    return Sequelize.transaction(t =>
    {
        const options = { raw: true, transaction: t }
        return Sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options)
        .then(() => Sequelize.query(`truncate table ${tableName}`, options))
        .then(() => Sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options))
    });
}