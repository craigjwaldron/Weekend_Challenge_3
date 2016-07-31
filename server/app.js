var express = require("express");
var app = express();
var path = require("path");
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var answer = require("../modules/mathModule.js");

// TAKE OUT LOCAL HOST FOR HEROKU!!!!
var server = app.listen (2000, 'localhost', function(){
  var port = server.address().port;
  console.log("Hello from server 3000");
});
// server tested and works

app.get("/", function(req, res){
 res.sendFile(path.resolve("views/index.html"));
});

  app.post('/calculate', urlencodedParser, function( req, res ){
  res.write( " " + answer(req.body));
  res.end();
});

app.use(express.static("public"));
