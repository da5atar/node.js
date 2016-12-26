 var fs = require("fs");

/*============================================================================*/

/*
var files = fs.readdirSync('./lib'); // to synchronously read the content of the lib dir

console.log(files); */

/*============================================================================*/

// reading files asynchronously
fs.readdir('./lib', function(err, files){
    
    if (err){
        throw err;
    }
    
    console.log(files);
    
});

console.log("Reading Files...");