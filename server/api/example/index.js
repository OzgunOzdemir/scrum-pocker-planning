'use strict';

const express = require('express');
const router = express.Router();
const controller = require("./example.controller");
const route = require('../../utils/route.helper');

// ********************* GET Routes ******************* //
router.get('/', controller.getExample)
// ********************* GET Routes ******************* //


module.exports = router;