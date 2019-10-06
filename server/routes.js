'use strict';

const routes = (app) => {
    app.use('/stories', require('./api/story'));
}

module.exports = routes;