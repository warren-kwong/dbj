const mongoose = require('mongoose');

const mongoConnectString = 'mongodb://localhost/dbj';
const options = {
  useNewUrlParser: true
};

mongoose
  .connect(
    mongoConnectString,
    options
  )
  .then(
    () => {
      console.log(`Database successfully connected to: ${mongoConnectString}`);
    },
    err => {
      console.log(`ERROR ${err} connecting to: ${mongoConnectString}`);
    }
  );

mongodb = mongoose.connection;

module.exports.mongodb = mongodb;
