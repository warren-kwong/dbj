const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
