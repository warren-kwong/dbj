const mongoose = require('mongoose');

const user = new mongoose.Schema({
  user: String,
  pw: String
});

module.exports = mongoose.model('User', user);
