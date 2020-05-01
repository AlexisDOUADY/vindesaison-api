
const UserController = require('./UserController');
const WineController = require('./WineController');

module.exports.routes =
[
    { route: 'users', controller: new UserController() },
    { route: 'wines', controller: new WineController() }
];
