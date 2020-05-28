var a = 5;
var b = 5;
var isEqual = (a == b);
var isGreaterThan = (a > b);
var isLessThan = (a < b);
var isNotEqualTo = (a != b);

//AND/OR

if(a == b) {
	console.log(a + " == to " + b);
} else {
	console.log(a + " != to " + b);
}

if(a > b) {
	console.log(a + " is > than " + b);
} else {
	console.log(b + " is < than " + a);
}

//ternary
a == b ? console.log("match exists") : console.log("Match does not exist");