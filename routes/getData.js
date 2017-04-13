var mysql=require('./mysql');
exports.getData=function(req, res, next) {
  console.log("Details: "+JSON.stringify(req.body));
if(req.body.device=='device1'){
  var query="INSERT INTO sensordata (`temperature`, `pressure`, `humidity`, `lux`) "+
   "VALUES('"+req.body.temperature+"', '"+req.body.pressure+"', '"+req.body.humidity+"', '"+req.body.lux+"')";
}
  else{
    var query="INSERT INTO sensordata1 (`temperature`, `pressure`, `humidity`, `lux`) "+
     "VALUES('"+req.body.temperature+"', '"+req.body.pressure+"', '"+req.body.humidity+"', '"+req.body.lux+"')";
  }

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
