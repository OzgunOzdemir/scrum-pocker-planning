const lodash = require('lodash');

// Set default application environment values
process.env.NODE_ENV =  'development';
process.env.PORT = 9000;    //You can set port for development environment in .env file

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT
};

module.exports = lodash.merge(config, require(`./${process.env.NODE_ENV}.js`) || {});