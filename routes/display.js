var mysql = require('./mysql');

/* GET home page. */
exports.display=function(req, res, next) {
    var Query = "SELECT * FROM sensordata";
    mysql.fetchData(function(err, results) {
        if (err) {
            throw err;
        } else {
            console.log(JSON.stringify(results));
            res.render('display', { results : results });
        }
    }, Query);

};


