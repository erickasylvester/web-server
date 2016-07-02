var person = {
	name: 'Ericka',
	age: 31
}

//convert object into person
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log('CHALLENGE AREA');

//JSON string
var animal = '{"name": "perro"}';
//parse to object
var dogObject = JSON.parse(animal);
console.log(dogObject);
console.log(typeof dogObject);
console.log(dogObject.name);

dogObject.age = 5;
console.log(dogObject.age);

//convert back to JSON
animal = JSON.stringify(dogObject);

console.log(animal);
