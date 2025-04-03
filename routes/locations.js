var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('locations', { title: 'Search Results Locations' });
});

module.exports = router;
