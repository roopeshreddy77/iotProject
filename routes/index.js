var express = require('express');
var router = express.Router();
var mysql = require('./mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
var Query = "SELECT * FROM sensordata";
  mysql.fetchData(function(err, results) {
    if (err) {
      throw err;
    } else {
      console.log(JSON.stringify(results));
      res.render('login', { title: 'Express' });
    }
  }, Query);

});

module.exports = router;
