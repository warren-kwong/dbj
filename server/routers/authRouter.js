const express = require('express');
const router = express.Router();

const { createNewUser, selectUser, verifyUser } = require('../db/user');

router.post('/login', function() {});
router.post('/logout', function() {});

router.post('/register', async function(req, res) {
  const { username, password } = req.body;
  const data = await selectUser(username);

  if (data.length) {
    res.status(200).send('username already exists.');
  } else {
    try {
      createNewUser(username, password);
      res.status(201).send();
    } catch (err) {
      console.log(err);
      res.status(401).send();
    }
  }
});

module.exports = router;
