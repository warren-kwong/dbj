const User = require('./userSchema');

const createNewUser = async (username, password) => {
  try {
    let data = User.create({ username, password });
    console.log(`created user ${username}`);
    return data;
  } catch (err) {
    console.log('error', err);
    throw new Error(err);
  }
};

const selectUser = () => {};
const verifyUser = () => {};

module.exports = {
  createNewUser,
  selectUser,
  verifyUser
};
