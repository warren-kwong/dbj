const express = require('express');
const authRouter = require('./authRouter.js');
const authenticate = require('../middleware/passport.js').authenticate;

const router = express.Router();

router
  .use('/auth', authRouter)
  .use(authenticate)
  .use('/help', function() {
    console.log('help');
  });

module.exports = router;
