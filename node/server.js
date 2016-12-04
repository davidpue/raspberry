var express = require('express');
var app = express();
var fs = require("fs");
var exec = require('child_process').exec;
var child;

app.get('/listUsers', function (req, res) {
   exec("sudo python /home/pi/python/tvOn.py");
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
   
})

app.get('/tv', function (req, res) {
   var cmdParam = req.query.cmd
   if(cmdParam == "on")
    var cmd = "sudo python /home/pi/python/tvOn.py"
   else if(cmdParam == "off")
    var cmd = "sudo python /home/pi/python/tvOff.py"
   exec(cmd)
   res.status(202)
   res.json({
     properties: [cmd, cmdParam]
    })
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})