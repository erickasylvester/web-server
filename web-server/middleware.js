


var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!!!!');
		//Calling function can continue when
		//next is called
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalURL);

		next(); 
	}
};

module.exports= middleware;
