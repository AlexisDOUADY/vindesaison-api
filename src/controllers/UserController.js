
const models = require('../models');
const Controller = require('./Controller');

module.exports = class UserController extends Controller {

    constructor() {
        super(models.User, [
            { model: models.Rank, as: 'rank' },
            { model: models.Address, as: 'addresses' }
        ]);
    }

}
