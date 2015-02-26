'use strict';

var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirPath, callback);

function callback(err, list) {
	var filteredFiles = list.filter(isRightExtension);
	for (var i = 0; i < filteredFiles.length; i++) {
		console.log(filteredFiles[i]);
	}
}

function isRightExtension(file) {
	var elExt = path.extname(file);
	return '.' + extension === elExt;
}