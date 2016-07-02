function createAdder ( baseNumber ){
	function add ( numberToAdd )
	{
		return baseNumber + numberToAdd;
	}
	return add;
}

var addTen = createAdder(10);
console.log (addTen(2));//12
console.log (addTen(0));//0