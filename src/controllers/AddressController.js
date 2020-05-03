
const models = require('../models');
const Controller = require('./Controller');

module.exports = class AddressController extends Controller {

    constructor() {
        super(models.Address, [ { model: models.User, as: 'user' } ]);
    }

}
