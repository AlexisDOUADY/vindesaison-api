
const models = require('../models');
const Controller = require('./Controller');

module.exports = class OrderStateController extends Controller {

    constructor() {
        super(models.OrderState, []);
    }

}
