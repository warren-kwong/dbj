const mongoose = require('mongoose');
require('../').mongodb;

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
