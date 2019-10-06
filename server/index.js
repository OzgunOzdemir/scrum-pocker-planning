'use strict';

const app = require('./app');
const config = require('./config/environment');

// Load api routes
require('./routes')(app);

// Start server
const startServer = () => {
    app.listen(config.port, () => console.log('Scrum poker planning listening on %d, in %s mode', config.port, config.env));
}

setImmediate(startServer);


module.exports = app;