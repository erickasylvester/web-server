var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.options('location', {
		demand: false,
		alias: 'l',
		description: 'Location for weather',
		type: 'string'
	})
	.help('help')
	.argv;

if ( typeof argv.l === 'string' && argv.l.length >0 )
{
	console.log('User provided location');
	weather(argv.location).then(function(currentWeather)
	{
		console.log(currentWeather);
	}).catch(function(error)
	{
		console.log(error);
	}
	)
}
else
{
	//User did not provide location
	console.log('User did not provide location');
	location().then(function(location){
			weather(location.city).then(function(currentWeather){
				console.log(currentWeather);
			})
		}
	)
	.catch(function(error){
		console.log(error);
	})
}



