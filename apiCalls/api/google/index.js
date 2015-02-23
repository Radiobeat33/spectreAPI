var express = require('express');
var router = express.Router();
var APIcall = require('./googleHandler.js');
var mongoose = require('mongoose');

router.get('/apiCallGoogle', APIcall.googleCall);

module.exports = router;

