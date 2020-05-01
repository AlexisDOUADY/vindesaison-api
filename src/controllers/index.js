
const UserController = require('./UserController');

module.exports.routes =
[
    { route: 'users', controller: new UserController() }
];
