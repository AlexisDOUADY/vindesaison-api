const app = require('../app')
const debug = require('debug')('express-sequelize')
const http = require('http')
const models = require('../src/models');
const portsUtils = require('../src/helpers/portsHelper')



process.env.NODE_ENV = 'development'



const port = portsUtils.normalizePort(process.env.PORT || '1337');
app.set('port', port);
const server = http.createServer(app);

models.sequelize.sync().then(function()
{
    server.listen(port, function()
    {
        debug('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
});

function onError(error)
{
    if (error.syscall !== 'listen')
        throw error;

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code)
    {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening()
{
   let addr = server.address();
   let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
