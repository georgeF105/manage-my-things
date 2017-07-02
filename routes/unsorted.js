var express = require('express');
var router = express.Router();

var { getUnsorted } = require('../lib/folder');

/* GET home page. */
router.get('/', function(req, res, next) {
  getUnsorted()
    .then(unsorted => {
      res.render('unsorted', { title: 'To Be Sorted!!', unsorted });
    })
    .catch(err => {
      var err = new Error(err);
      err.status = 404;
      next(err);
    });
});

module.exports = router;
