module.exports =
{
    success(res)
    {
        res.status(200).json({ code: 200, message: 'Success' })
    },

    error400(res, msg)
    {
        res.status(400).json({ code: 400, message: `Bad request : ${msg}`});
    },

    error403(req, res)
    {
        res.status(403).json({ code: 403, message: `Forbidden : can't access resource ${req.originalUrl}`});
    },

    error404(req, res)
    {
        res.status(404).json({ code: 404, message: `Resource not found : can't find resource ${req.method} ${req.originalUrl}`});
    },

    error500(res, error)
    {
        res.status(500).json({ code: 500, message: `Internal server error`, details: (process.env.NODE_ENV === 'development' ? error : '')});
    }
}
