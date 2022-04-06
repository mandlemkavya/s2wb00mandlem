var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Jam', { title: 'Search Results Jam' });
});

module.exports = router;