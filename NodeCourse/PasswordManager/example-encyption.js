var crypto = require('crypto-js');

var secretMessage = {
	name: 'Ericka',
	secretName: 'Maricua'
};

var secretKey = '123abc';

//convert object to string
var secretMessageJSON = JSON.stringify(secretMessage);

//encrypt - only takes string
var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);
console.log('Encrypted Message: '+ encryptedMessage);

//decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
//returns an array of words
//console.log(bytes);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
var descryptedObject = JSON.parse(decryptedMessage);
console.log(descryptedObject);
console.log('Descrypted Message secretName: '+ descryptedObject.secretName);
