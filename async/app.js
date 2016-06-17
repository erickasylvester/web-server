var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	// .command('weather', 'Get weather information', function (yargs) {
	// 	yargs.options({
	// 		location: {
	// 			demand: false,
	// 			alias: 'l',
	// 			description: 'Location for weather',
	// 			type: 'string'
	// 		}
	// 	}).help('help');
	// })
	// .help('help')
	// .argv;
	.options({
		location: {
			demand: false,
			alias: 'l',
			description: 'Location for weather',
			type: 'string'
		}
	})
	.help('help')
	.argv;

var command = argv._[0];

//the weather function takes in 
//a callback function
// weather(function (currentWeather){
// 	console.log(currentWeather);
// });

// location(function(location){
// 	if(!location)
// 	{
// 		console.log('Unable to guess location');
// 		return;
// 	}
// 	console.log('City:' + location.city);
// 	console.log('Lon/Lat: ' + location.loc);
// });

// if ( command === 'weather' )
// {
	if (argv.l.length >0 && typeof argv.l === 'string')
	{
		//User did not provide location
		console.log('User did not provide location');
		location().then(function(location){
				weather(location).then(function(currentWeather){
					console.log(currentWeather);
				})
			}
		)
		.catch(function(error){
			console.log(error);
		})
	}
	else
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

//}



