'use strict';

const routes = (app) => {
    app.use('/posts', require('./api/example'));
}

module.exports = routes;