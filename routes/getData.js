var mysql=require('./mysql');
exports.getData=function(req, res, next) {
  console.log("Details: "+JSON.stringify(req.body));
   var query="INSERT INTO sensordata (`temperature`, `humidity`, `pressure`, `gyroscope`, `accelerometer`) "+
    "VALUES('"+req.body.temperature+"', '"+req.body.humidity+"', '"+req.body.pressure+"', '"+req.body.gyroscope+"', '"+req.body.accelerometer+"')";

    mysql.fetchData(function(err, results) {
        if (err) {
            throw err;
        } else {
            console.log(JSON.stringify(results));
            res.send("Success");
            //res.render('login', { title: 'Express' });
        }
    }, query);


};

;
