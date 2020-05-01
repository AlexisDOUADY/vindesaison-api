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
        //let { limit, offset, searchQuery } = req.query;
        let options = { where: {}, include: this.includes };

        /*if(limit)
            if(!this.controlLimit(res, options, limit))
                return;

        if(offset)
            if(!this.controlOffset(res, options, offset))
                return;

        if(searchQuery)
            if(!this.controlSearchQuery(res, options, searchQuery))
                return;*/

        const countOptions = { where: options.where, includes: options.includes }
        this.model.count(countOptions)
        .then(count => {
            this.model.findAll(options)
            .then(models => !models ? responseHelper.error404(req, res) : res.json({ models: models, count: count }))
            .catch(e => responseHelper.error500(res, e))
        })
        .catch(e => responseHelper.error500(res, e))
    }

    controlLimit(res, options = { where: {} }, limit)
    {
        try
        {
            limit  = parseInt(limit)
            options.limit = limit;
            return true;
        }
        catch (e)
        {
            responseHelper.error400(res, 'Limit given is not parsable as an integer')
            return false;
        }
    }

    controlOffset(res, options = { where: {} }, offset)
    {
        try
        {
            offset  = parseInt(offset)
            options.offset = offset;
            return true;
        }
        catch (e)
        {
            responseHelper.error400(res, 'Offset given is not parsable as an integer')
            return false;
        }
    }

    controlSearchQuery(res, options = { where: {} }, searchQuery)
    {
        try {
            searchQuery = JSON.parse(searchQuery);
            let keywords = searchQuery.keywords

            if(keywords)
            {
                keywords = keywords.split(' ');
                keywords = keywords.map(word => { return { [Op.like]: `%${word}%` } });

                options.where.name = { [Op.and]: keywords };
                return true;
            }
        } catch(e) {
            responseHelper.error500(res, e);
            console.log(e)
            return false;
        }
    }

    show(req, res)
    {
        this.model.findOne({ where: { uuid: req.params.uuid }, include: this.includes })
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
        this.model.findOne({ where: { uuid: req.params.uuid }})
        .then(model => model.update(req.body)
            .then(res.json(responseHelper.success(res)))
            .catch(e => responseHelper.error500(res, e)))
        .catch(() => responseHelper.error404(req, res))
    }

    destroy(req, res)
    {
        this.model.destroy({ where: { uuid: req.params.uuid } })
        .then(() => res.json(responseHelper.success(res)))
        .catch(e => responseHelper.error500(res, e))
    }
}
