const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../middleware/passport.js');

const passport = require('passport');

const { createNewUser, selectUser } = require('../db/userModel');

router.post('/login', async function(req, res, next) {
  passport.authenticate(
    'local',
    { session: false, failureRedirect: '/login' },
    function(err, user, info) {
      console.log(err, user, info);
      if (err || !user) {
        return res.status(400).send(err || info);
      }
      return res.status(200).send(user._id);

      // if (err) return res.status(400).json({ err });
      // if (!user) return res.status(400).send({ info });

      // req.login(user, { session: false }, err => {
      //   if (err) return res.status(400).send(err);

      //   const token = jwt.sign({ data: user._id }, process.env.TOKEN_SECRET, {
      //     expiresIn: '1d'
      //   });

      //   res.cookie('jwt', token, { httpOnly: true, secure: true });
      //   res.status(200).send();
      // });
    }
  )(req, res, next);
});

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
