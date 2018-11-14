const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routers/');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
