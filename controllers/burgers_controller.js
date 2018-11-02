var express = require('express');
var burgers = require('burger.js');

var PORT = process.env.PORT || 8080;

var app = express();

app.get('/', function(req,res){

});



app.listen(PORT, function(){
    console.log('Server listening on http://localhost:' + PORT);
});

module.exports = app;