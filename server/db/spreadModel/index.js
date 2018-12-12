const Spread = require('./spreadSchema');

const createNewSpread = async id => {
  const object = {
    title: 'test',
    description: 'test',
    author_id: id
  };
  try {
    const data = await Spread.create(object);
    return data;
  } catch (err) {
    console.log('error', err);
    throw new Error(err);
  }
};

const deleteSpread = () => {};

const fetchUserSpreads = async userId => {
  try {
    const spreads = await Spread.find({ author_id: userId }).exec();
    return spreads;
  } catch (err) {
    console.log('error', err);
    throw new Error(err);
  }
};

const selectSpread = () => {};

module.exports = {
  createNewSpread,
  deleteSpread,
  fetchUserSpreads,
  selectSpread
};
