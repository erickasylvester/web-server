// function doWork(data, callback){
// 	callback('done');
// }
// function doWorkPromise(data){
// 	//promise is something you can wait to pass or fail
// 	return new Promise(function( resolve, reject){
// 			//you can call resolve and reject once
// 			//the rest will be ignored
// 			setTimeout( function(){
// 				reject('Everything is broken');
// 			}, 1000);
// 			// reject({
// 			// 	error: 'something bad happened'
// 			// });
// 		}	
// 	);
// }

// //.then takes 2 callback functinos
// //1 for resolve
// //1 for reject
// doWorkPromise('some data').then(function(data){
// 	console.log(data);
// }, function(error){
// 	console.log(error);
// });

var request = require('request');


function getWeather(location){
	// 	//promise is something you can wait to pass or fail
	return  new Promise(function(resolve, reject){
		//the callback function prints a message
		//callback('Here is the current weather');
		//encode string
		//for example - replace spaces with encoded string
		encodeURIComponent(location);
		//var url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdad7a965a8619dbf6b4dec12253b828&q=%20+%20newyork%20+%20&units=imperial';

		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=cdad7a965a8619dbf6b4dec12253b828&q=' + location + '&units=imperial';


		//Request data from URL, in JSON format 
		//when data is received, use callback function
		//to process
		request({
			url: url,
			json: true
		}, function (error, response, body){
			if(error){
				reject(error);
			}
			else
			{
				//var weatherJSON = JSON.stringify(body, null, 4);
				//console.log(weatherJSON);
				//var weatherObject = JSON.parse(weatherJSON);
				//body is an object
				//console.log('Weather is: ', body.main.temp, " in ", body.name);
				resolve('Weather is: '+ body.main.temp + " in " + body.name);
			}
		});
	});
}

//get weather returns a promise so we wait until we get a
//fetch status 'then' we process either the resolve (
// first callback) or the reject ( second callback)
getWeather('new york').then(function(currentWeather){
	console.log(currentWeather);
}, function(error){
	console.log(error);
});




