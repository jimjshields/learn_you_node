"use strict";

var args = process.argv;

var calcSum = function(args) {
	var sum = 0;
	for (var i = 2; i < args.length; i ++) {
		// Coerce string args to numbers.
		sum += +args[i];
	}
	return sum;
};

console.log(calcSum(args));