'use strict';

const express = require('express');
const router = express.Router();
const controller = require("./voter.controller");

// ********************* GET Routes ******************* //)
router.get('/:sessionName', controller.getVoterBySessionName)
// ********************* GET Routes ******************* //

// ********************* POST Routes ******************* //
router.post('/', controller.addVoter)
// ********************* POST Routes ******************* //


module.exports = router;