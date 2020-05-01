
const UserController = require('./UserController');
const WineController = require('./WineController');
const BoxController = require('./BoxController');

module.exports.routes =
[
    { route: 'users', controller: new UserController() },
    { route: 'wines', controller: new WineController() },
    { route: 'boxes', controller: new BoxController() }
];
