const User = require('./userSchema');
const bcrypt = require('bcrypt');

const createNewUser = async (username, password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    const data = await User.create({ username, password: hash });
    console.log(`successfully created user: ${username}`);
    return data;
  } catch (err) {
    console.log('error', err);
    throw new Error(err);
  }
};

const selectUser = async username => {
  try {
    return await User.find({ username });
  } catch (err) {
    console.log('error, err');
    return err;
  }
};

const verifyUser = async (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  createNewUser,
  selectUser,
  verifyUser
};
