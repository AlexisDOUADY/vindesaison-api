
const models = require('../models');
const Controller = require('./Controller');

module.exports = class UserController extends Controller {

    constructor() {
        super(models.Rank, []);
    }

}
