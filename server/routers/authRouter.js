const express = require('express');
const router = express.Router();

const UserModel = require('../db/user');

router.post('/login', function() {});
router.post('/logout', function() {});

router.post('/register', async function(req, res) {
  const { username, password } = req.body;

  UserModel.createNewUser(username, password);

  console.log('req.body', req.body);
  // const data = await UserModel.selectUser
  res.status(201).send();
});

module.exports = router;
