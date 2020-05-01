
const models = require('../models');
const Controller = require('./Controller');

module.exports = class WineController extends Controller {

    constructor() {
        super(models.Wine, []);
    }

}
