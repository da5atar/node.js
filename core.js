var path = require('path'); 
var util = require('util');
var v8 = require('v8');

/*============================================================================*/

/*console.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads'); // to create a very long path string, that includes the current directory, plus www/files/uploads.

console.log(dirUploads);*/

/*============================================================================*/

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads'); // to create a very long path string, that includes the current directory, plus www/files/uploads.

util.log(dirUploads);

util.log(v8.getHeapStatistics()); // will give us current information on our current memory statistics.