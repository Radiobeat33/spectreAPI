var express = require('express');
var router = express.Router();
var APIcall = require('./twitterHandler.js');
var mongoose = require('mongoose');

router.get('/apiCallTwitter', APIcall.twitterCall);

module.exports = router;

