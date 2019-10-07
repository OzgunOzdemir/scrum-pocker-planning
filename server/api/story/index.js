'use strict';

const express = require('express');
const router = express.Router();
const controller = require("./story.controller");

// ********************* GET Routes ******************* //
router.get('/', controller.getStory)
router.get('/:id', controller.getStoryById)
// ********************* GET Routes ******************* //

// ********************* POST Routes ******************* //
router.post('/', controller.addStory)
// ********************* POST Routes ******************* //

// ********************* PUT Routes ******************* //
router.put('/updateStatus/:id', controller.updateStoryByStatus)
router.put('/updateFinalScore/:id', controller.updateFinalScoreById)
// ********************* PUT Routes ******************* //


module.exports = router;