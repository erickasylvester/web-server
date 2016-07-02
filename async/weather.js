var request = require('request');

//callback -> passed function
//the callback function tells it
//what to do after the data is fetched
//in this case its to print it to the screen
//pass data back into the callback
module.exports = function(location){
	return new Promise(function(resolve, reject){
			//the callback function prints a message
		//callback('Here is the current weather');
		//encode string
		//for example - replace spaces with encoded string
		location = encodeURIComponent(location);
		//var url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdad7a965a8619dbf6b4dec12253b828&q=%20+%20newyork%20+%20&units=imperial';

		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdad7a965a8619dbf6b4dec12253b828&q=' + location + '&units=imperial';
		if(!location)
		{
			return reject('Invalid location');
		}

		//Request data from URL, in JSON format 
		//when data is received, use callback function
		//to process
		request({
			url: url,
			json: true
		}, function (error, response, body){
			if(error){
				reject('Unable to fetch weather');
			}
			else
			{
				//var weatherJSON = JSON.stringify(body, null, 4);
				//console.log(weatherJSON);
				//var weatherObject = JSON.parse(weatherJSON);
				//body is an object
				//consolog('Weather is: ', body.main.temp, " in ", body.name);
				resolve('Weather is: '+ body.main.temp + " in " + body.name);
			}
		});
	})


}

