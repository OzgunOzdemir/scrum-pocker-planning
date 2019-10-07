'use strict';

const express = require('express');
const router = express.Router();
const controller = require("./story.controller");

// ********************* GET Routes ******************* //
router.get('/', controller.getStory)
// ********************* GET Routes ******************* //

// ********************* POST Routes ******************* //
router.post('/', controller.addStory)
// ********************* POST Routes ******************* //


module.exports = router;