const express = require('express');
const router = express.Router();

let db = require('../libs/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  if (req.user) {
    res.redirect('/')
  } else {
    res.session.user = db[req.body.username];
    res.redirect('/');

  }
});

module.exports = router;
