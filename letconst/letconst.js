function logScope() {
	var value = 2;

	if(value) {
		let value = "Im different value";
		console.log(value);
	}

		console.log("local var", value);
}

logScope();

const MYCONSTANT = 5;
console.log("My constant ", MYCONSTANT);


