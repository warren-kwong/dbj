const mongoose = require('mongoose');
require('../').mongodb;

const UsersSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UsersSchema);

module.exports = User;
