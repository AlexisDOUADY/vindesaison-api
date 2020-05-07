
const UserController = require('./UserController');
const WineController = require('./WineController');
const BoxController = require('./BoxController');
const RankController = require('./RankController');
const AddressController = require('./AddressController');
const OrderController = require('./OrderController');

module.exports.routes =
[
    { route: 'ranks', controller: new RankController() },
    { route: 'users', controller: new UserController() },
    { route: 'addresses', controller: new AddressController() },
    { route: 'wines', controller: new WineController() },
    { route: 'boxes', controller: new BoxController() },
    { route: 'orders', controller: new OrderController() },
];
