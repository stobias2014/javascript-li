function findBiggestFraction(a, b) {
	console.log("Function is running");
	var result;
	a > b? result = a : result = b;
	return result;
}

var theBiggest = function(a, b) {
	var result;
	a > b ? result = a : result = b;
	return result;
}

var immediateInvoked = (function(a, b) {
	var result;
	a > b ? result = a : result = b;
	return result;
})(3, 4);

console.log("Immediately Invoked")
console.log(immediateInvoked);

var firstFraction = 5/7;
var secondFraction = 3/4;

console.log("Named Function");
var result = findBiggestFraction(firstFraction, secondFraction);
console.log("Result = " + result);

console.log("Anonymous Function");
console.log(theBiggest);
var anonResult = theBiggest(firstFraction, secondFraction);
console.log(anonResult);

