  var express = require('express');
  var router = express.Router();
  router.use(passport.initialize());

  // Passport Configuration
  router.use('/g', require('./google'));

  module.exports = router;

  