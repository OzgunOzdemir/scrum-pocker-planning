'use strict';

const config = require('../config/environment');
const got = require('got');
const headers = { "x-site": config.siteUrl };

const load = async (method, url, data, cb) => {
    try {
        const options = { method: method, json: true, headers: headers };
        if (data) {
            Object.assign(options, {
                body: data
            });
        }
        const response = await got(url, options);
        cb(response.body);
    } catch (error) {
        cb({
            status: 'error',
            message: 'An error occured at server!'
        });
    }
}
const get = (req, res) => {
    load('GET', config.remote.url.concat(req.originalUrl), undefined, (response) => { return res.json(response); });
}
const post = (req, res) => {
    load('POST', config.remote.url.concat(req.originalUrl), req.body, (response) => { return res.json(response); });
}
const destroy = (req, res) => {
    load('DELETE', config.remote.url.concat(req.originalUrl), req.body, (response) => { return res.json(response); });
}
const put = (req, res) => {
    load('PUT', config.remote.url.concat(req.originalUrl), req.body, (response) => { return res.json(response); });
}
const patch = (req, res) => {
    load('PATCH', config.remote.url.concat(req.originalUrl), req.body, (response) => { return res.json(response); });
}


module.exports.get = get;
module.exports.post = post;
module.exports.delete = destroy;
module.exports.put = put;
module.exports.patch = patch;