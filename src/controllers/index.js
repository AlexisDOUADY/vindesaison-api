
const UserController = require('./UserController');
const WineController = require('./WineController');
const BoxController = require('./BoxController');
const RankController = require('./RankController');

module.exports.routes =
[
    { route: 'ranks', controller: new RankController() },
    { route: 'users', controller: new UserController() },
    { route: 'wines', controller: new WineController() },
    { route: 'boxes', controller: new BoxController()  },
];
