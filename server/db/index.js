const mongoose = require('mongoose');

const mongoConnectString = '';
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
