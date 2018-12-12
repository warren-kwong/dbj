const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const { selectUser, verifyUser } = require('../db/userModel');

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async function(username, password, done) {
      try {
        const data = await selectUser(username);
        if (!data.length) {
          return done(null, false, 'Username does not exist.');
        } else {
          try {
            const verified = await verifyUser(password, data[0].password);

            if (verified) {
              return done(null, data[0], 'Login successful.');
            } else {
              return done(null, false, 'Incorrect username or password.');
            }
          } catch (err) {
            done(err);
          }
        }
      } catch (err) {
        done(err);
      }
    }
  )
);

let authenticate = (req, res, next) => {
  if (req.url === '/login' || req.url === '/register') {
    next();
  } else {
    jwt.verify(req.cookies.token, process.env.TOKEN_SECRET, (err, token) => {
      if (err) {
        console.log('Redirect');
        res.status(500).send();
      } else {
        next();
      }
    });
  }
};

module.exports.authenticate = authenticate;
