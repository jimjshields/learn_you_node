'use strict';

var fs = require('fs');

var args = process.argv;
var filePath = args[2];

function getStrFromFile(filePath) {
	return fs.readFileSync(filePath, 'utf8');
}

function countNewLines(str) {
	var lines = str.split('\n');
	return lines.length - 1;
}

var fileStr = getStrFromFile(filePath);
var numNewLines = countNewLines(fileStr);
console.log(numNewLines);