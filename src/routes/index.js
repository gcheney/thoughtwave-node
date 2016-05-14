var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/home/index', { title: 'Coder Tutorials' });
});

module.exports = router;
