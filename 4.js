'use strict';

var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, callback);

function callback(err, data) {
	var numNewLines = data.toString().split('\n').length - 1;
	console.log(numNewLines)
}