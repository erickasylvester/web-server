//web application server framework
var express = require('express');
var app = express();
//process.env.PORT is a heroku variable
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js')
//First argumnet - route - '/' - root URL
//function with request and response
/*app.get('/', function(req, res){
	res.send('Hello Express');
})*/


//Application level middleware
app.use(middleware.logger);
//it needs to go first - 
//app.use(middleware.requireAuthentication);

//Route level middleware if added as the second parameter
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('There is so much about me!');
})
//express.static exposes the file under the folder
//Access on web browser http://localhost:3000/index.html
//The default value 
app.use(express.static(__dirname+'/public'));

console.log(__dirname);

//Provide port number - 3000 is typically not used
app.listen(PORT, function(){
	console.log('Express server started on port:' + PORT);
});