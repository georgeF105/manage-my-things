var express = require('express');
var router = express.Router();

var { getUnsorted } = require('../lib/folder');

/* GET home page. */
router.get('/', function(req, res, next) {
  getUnsorted()
    .then(unsorted => {
      let scope = {
        data: {
          title: 'To Be Sorted!!',
          unsorted
        },
        vue: {
          head: {
            title: 'Manage my things'
          }
        }
      }
      console.log('here', scope);

      res.render('unsorted', scope);
    })
    .catch(err => {
      var err = new Error(err);
      err.status = 404;
      next(err);
    });
});

module.exports = router;
