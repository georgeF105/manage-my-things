var express = require('express');
var router = express.Router();

var exampleMixin = {
  methods: {
    hello: function () {
      alert('Hello')
    }
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    data: {
      title: 'Express with Vue',
      message: 'Manage all your thing'
    },
    vue: {
      head: {
        title: 'manage my things'
      },
      mixins: [exampleMixin]
    }
  });
});

module.exports = router;
