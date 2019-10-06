'use strict';

const express = require('express');
const router = express.Router();
const controller = require("./story.controller");

// ********************* GET Routes ******************* //
router.post('/', controller.addStory)
// ********************* GET Routes ******************* //


module.exports = router;