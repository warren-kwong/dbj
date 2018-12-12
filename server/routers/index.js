const express = require('express');
const authRouter = require('./authRouter.js');
const spreadRouter = require('./spreadRouter');
const authenticate = require('../middleware/passport.js').authenticate;

const router = express.Router();

router
  .use('/auth', authRouter)
  .use(authenticate)
  .use('/spread', spreadRouter);

module.exports = router;
