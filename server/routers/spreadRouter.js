const express = require('express');
const router = express.Router();

const { fetchUserSpreads, createNewSpread } = require('../db/spreadModel');

router.post('/create/:id', async function(req, res) {
  console.log(req.params.id);
  try {
    const spread = await createNewSpread(req.params.id);
    res.status(200).send(spread);
  } catch (err) {
    console.log('error', err);
    res.status(500).send('Database error');
  }
});

router.get('/getAll/:id', async function(req, res) {
  try {
    const spreads = await fetchUserSpreads(req.params.id);
    console.log('available user spreads: ', spreads);
    res.status(200).send(spreads);
  } catch (err) {
    console.log('error', err);
    res.status(500).send('Database error');
  }
});

module.exports = router;
