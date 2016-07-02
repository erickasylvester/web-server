var argv = require('yargs')
			.command('Hello', 'Greets the user', function(yargs){
				yargs.options({
					name: {
						demand: true,
						alias: 'n',
						description: 'Your first name goes here',
						type: 'string'
					},
					lastname: {
						demand: true,
						alias: 'l',
						description: 'Your last name goes here',
						type: 'string'
					}
				}).help('help');
			})
			.help('help')
			.argv;

var command = argv._[0];
console.log(argv);

if ( command === 'Hello' && typeof argv.name !== 'undefined' 
	&& typeof argv.lastname !== 'undefined')
{
	console.log ( "Hi there " + argv.name + " " + argv.lastname + "! ");
}
else
{
	console.log ( "Who are you?!!" );

}