const express = require('express');
const router = express.Router();

const UserModel = require('../db/user');

router.post('/login', function() {});
router.post('/logout', function() {});

router.post('/register', async function(req, res) {
  console.log('req.body', req.body);
  // const data = await UserModel.selectUser
});

module.exports = router;
