'use strict';

var myModule = require('/6.js');

var dirName = process.argv[2];
var extension = process.argv[3];

myModule(dirName, extension)