const mongoose, { Schema } = require('mongoose');

const UsersSchema = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', UsersSchema);
