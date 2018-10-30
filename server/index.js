const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, '../client/dist/')));

// app.get('/', (req, res) => {
//   res.send({ ok: true });
// });

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
