var mysql=require('./mysql');
exports.getData=function(req, res, next) {
    //http://localhost:3000/getData?temperature=0.00988&humidity=0.8900&pressure=0.123&gyroscope=0.7654&accelerometer=0.973267
var data={
    'temperature': req.param("temperature"),
    'humidity': req.param("humidity"),
    'pressure':req.param("pressure"),
    'gyroscope': req.param("gyroscope"),
    'accelerometer': req.param("accelerometer")
};
    console.log("Details: "+JSON.stringify(data));
   var query="INSERT INTO sensordata (`temperature`, `humidity`, `pressure`, `gyroscope`, `accelerometer`) "+
    "VALUES('"+data.temperature+"', '"+data.humidity+"', '"+data.pressure+"', '"+data.gyroscope+"', '"+data.accelerometer+"')";

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
