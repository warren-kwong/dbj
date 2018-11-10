const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', user);
