var mysql = require('./mysql');

/* GET home page. */
exports.device2=function(req, res, next) {
    var Query = "SELECT * FROM sensordata";
    var Query1 = "SELECT * FROM sensordata1";
    var result={};
    mysql.fetchData(function(err, results) {
        if (err) {
            throw err;
        } else {
          result.table1=results;
          mysql.fetchData(function(err, results) {
              if (err) {
                  throw err;
              } else {
                result.table2=results;
                console.log("device2");
                console.log(result);
                  console.log(JSON.stringify(results));
                  res.render('device2', { results : result });
              }
          }, Query1);

        }
    }, Query);

};
