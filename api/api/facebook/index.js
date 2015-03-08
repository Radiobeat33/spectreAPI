var express = require('express');
var router = express.Router();
var APIcall = require('./facebookHandler.js');
var mongoose = require('mongoose');

router.get('/googlecall', APIcall.facebookCall);

module.exports = router;