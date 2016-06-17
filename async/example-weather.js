var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdad7a965a8619dbf6b4dec12253b828&q=%20+%20newyork%20+%20&units=imperial';
request({
	url: url,
	json: true
}, function (error, response, body){
	if(error){
		console.log('Unable to fetch weather');
	}
	else
	{
		console.log(JSON.stringify(body, null, 4));
		
	}
});

