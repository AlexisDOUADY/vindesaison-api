
const models = require('../models');
const Controller = require('./Controller');

module.exports = class BoxController extends Controller {

    constructor() {
        super(models.Box, []);
    }

}
