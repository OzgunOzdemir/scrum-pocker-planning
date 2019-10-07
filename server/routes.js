'use strict';

const routes = (app) => {
    app.use('/stories', require('./api/story'));
    app.use('/voters', require('./api/voter'));
}

module.exports = routes;