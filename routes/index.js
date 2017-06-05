var express = require('express');
var router = express.Router();

var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  var json = {title : 'Express',books : [{name:'Book 1',price:'15 €'},{name:'Book 2',price:'30 €'}]};

  res.render('index', json);
});

module.exports = router;
