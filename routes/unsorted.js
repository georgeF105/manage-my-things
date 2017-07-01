var express = require('express');
var router = express.Router();

var { getUnsorted } = require('../lib/folder');

/* GET home page. */
router.get('/', function(req, res, next) {
  var unsorted = getUnsorted();
  res.render('unsorted', { title: 'To Be Sorted!!', unsorted });
});

module.exports = router;
