var express = require('express');
var router = express.Router();

var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  var json = {title : 'Express',books : [{name:'Book 1',price:'15 €'},{name:'Book 2',price:'30 €'}]};

  res.render('index', json);
});

request('http://localhost:3000/random.json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

module.exports = router;
