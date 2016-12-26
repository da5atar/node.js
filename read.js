var fs = require("fs");
var path = require("path");

/*============================================================================*/

/* var contents = fs.readFileSync("./lib/sayings.md", "UTF-8"); // Whenever we're reading a text file, the second argument is going to be the text encoding, try with fs.readFileSync("./lib/sayings.md"); 

console.log(contents); */

/*============================================================================*/

/* fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents){
   
    if (err) {
        console.log(err); // logging the error doesn't kill the process.
    }
    
    console.log(contents);
    
}); */

/*============================================================================*/

// Combine the readFile command with the readdir command, and read the contents of all of the files found in a directory.

fs.readdir("./lib", function(err, files){
    
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib", fileName); // create a full path to our current file inside of the lib directory.
        var stats = fs.statSync(file); // stat will tell whether it is a file or a dir.
        if (stats.isFile() && fileName !== ".DS_Store"){
            
            fs.readFile(file, "UTF-8", function(err, contents){
                
                console.log(contents);
                
            });
            
        }
        
    });
    
});

