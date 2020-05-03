const responseHelper = require('../helpers/responseHelper');
const Op = require('sequelize').Op

module.exports = class Controller
{
    constructor(model, includes = [])
    {
        this.model = model;
        this.includes = includes;
    }

    list(req, res)
    {
        let options = { where: {}, order: [[ 'createdAt', 'DESC' ]], include: this.includes };

        const countOptions = { where: options.where, includes: options.includes }
        this.model.count(countOptions)
        .then(count => {
            this.model.findAll(options)
            .then(models => !models ? responseHelper.error404(req, res) : res.json({ models: models, count: count }))
            .catch(e => responseHelper.error500(res, e))
        })
        .catch(e => responseHelper.error500(res, e))
    }

    show(req, res)
    {
        this.model.findOne({ where: { id: req.params.uuid }, include: this.includes })
        .then(model => !model ? responseHelper.error404(req, res) : res.json(model))
        .catch(e => responseHelper.error500(res, e))
    }

    store(req, res)
    {
        this.model.create(req.body.model)
        .then(res.json(responseHelper.success(res)))
        .catch(e => responseHelper.error500(res, e))
    }

    update(req, res)
    {
        this.model.findOne({ where: { id: req.params.uuid }})
        .then(model => { req.body.updatedAt = new Date(); model.update(req.body); })
            .then(res.json(responseHelper.success(res)))
            .catch(e => responseHelper.error500(res, e))
        .catch(() => responseHelper.error404(req, res))
    }

    destroy(req, res)
    {
        this.model.destroy({ where: { id: req.params.uuid } })
        .then(() => res.json(responseHelper.success(res)))
        .catch(e => responseHelper.error500(res, e))
    }
}
