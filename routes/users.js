const express = require('express');
const router = express.Router();

const db = {
  'DackJorsey': {
    points: 0
  },
  'ParryLage': {
    points: 0
  }
};

router.get('/:username', function (req, res, next) {
  const username = req.params.username;
  if (!(username in db)) {
    return res.json({ error: 'User not found!' });
  }
  return res.json(db[username]);
});

router.post('/:username', function (req, res, next) {
  const username = req.params.username
  if (!(username in db)) {
    return res.json({ error: 'User not found!' });
  }
  const points = req.body.points;
  db[username].points += points;
  return res.json(db[username]);
});

router.delete('/:username', function (req, res, next) {
  const username = req.params.username
  if (!(username in db)) {
    return res.json({ error: 'User not found!' });
  }
  db[username].points = 0;
  return res.json(db[username]);
})

router.delete('/', function (req, res, next) {
  for (username in db) {
    db[username].points = 0;
  };
  return res.json(db);
});

module.exports = router;
