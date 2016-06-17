//Promises
//Chain multiple promises

// function doWork(shouldFail){
// 	return new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			if(shouldFail && typeof shouldFail === 'boolean')
// 			{
// 				reject('errorMessage');
// 			} else{
// 				resolve('success');
// 			}
// 		}, 1000 );
// 	});
// };

// //synchronize multiple promises
// //catch - if any of the promises fail
// doWork(true).then(function(message){
// 	console.log(message);
// 	return doWork(true); //second call of doWord
// }).then(function(message){
// 	console.log(message);
// 	console.log('all done!'); //resolve
// }).catch(function(error){  //then has catch function
// 	console.log(error);
// });

function getLocation(){
	return new Promise(function(resolve,reject){
		resolve('New York');
	});
}
function getWeather(location){
	return new Promise( function(resolve,reject){
		resolve('It is hot in '+ location);
	});
}

//One way to do it
// getLocation().then(function(message){
// 	getWeather(message).then(function(weatherMessage){
// 		console.log(weatherMessage);
// 	});
// }).catch(function(error){
// 	console.log(error);
// });

getLocation().then(function(message){
	//promise gets passed from one function to the other
	return getWeather(message);
	}).then(function(weatherMessage){
		console.log(weatherMessage);
	}).catch(function(error){
	console.log(error);
});








