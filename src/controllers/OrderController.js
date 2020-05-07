
const models = require('../models');
const Controller = require('./Controller');

module.exports = class OrderController extends Controller {

    constructor() {
        super(models.Order, [
            { model: models.OrderState, as: 'state' },
            { model: models.User, as: 'user' },
            { model: models.Address, as: 'delivery_address' },
            { model: models.Address, as: 'bill_address' },
            { model: models.Wine, as: 'wines', through: { attributes: ['quantity'], as: 'relationship' } },
            { model: models.Box, as: 'boxes', through: { attributes: ['quantity'], as: 'relationship' } },
        ]);
    }

}
