var account = {
	username:'',
	balance :0
};

var accounts = [];

function createAccount ( account )
{
	accounts.push( account);
	return account;
}
function getAccount ( username )
{
	var matchedAccount;
	for ( var i = 0; i < accounts.length ; i++)
	{
		if ( accounts[i].username === username)
		{
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

function deposit ( account, amount)
{
	if ( typeof amount === 'number')
		account.balance += amount;
	else
		console.log ( "Invalid Deposit");
}
function withdraw ( account, amount)
{
	if ( typeof amount === 'number')
		if ( amount < account.balance)
			account.balance -= amount;
		else
			console.log( " You got no money ");
	else
		console.log ( "Invalid Deposit");
}

function getBalance ( account )
{
	return account.balance;
}

function createBalanceGetter ( account)
{
	return function ()
	{
		return getBalance(account);
	}
}

var erickaAccount = new Object();
erickaAccount.username = 'Ericka';
erickaAccount.balance = 0;
createAccount(erickaAccount);

// var erickaAccount = createAccount ({
// 	username: 'Ericka',
// 	balance: 0
// })
var getMyBalance = createBalanceGetter(erickaAccount);
console.log ( getMyBalance() );
deposit(erickaAccount,100);
console.log ( getMyBalance() );
deposit(erickaAccount,150);
console.log ( getMyBalance() );
deposit(erickaAccount,'notengoplata');
console.log ( getMyBalance() );
console.log( accounts );
var existingAccount = getAccount('Ericka');
console.log ( existingAccount);

withdraw(erickaAccount,50);
console.log ( getMyBalance() );
withdraw(erickaAccount,8000);
console.log ( getMyBalance() );

