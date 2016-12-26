var fs = require("fs");
/*
fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
    
    console.log(`${chatlog.length}`);
    
});

console.log("Reading File"); // just a notification.

*/

// when we use fs.readFile, we'll have to wait until the entire contents of a large file is buffered before this call back will be invoked...

// ...A better solution is to use streams:

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

// will listen one time for a data event and that will let our users know that we have started reading the file:

stream.once("data", function(){
    
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});

// will listen for every data event that is raised and it will gather all of the text chunks of data and concatenate our data variable:

stream.on("data", function(chunk){
    
    process.stdout.write(`  chunk: ${chunk.length} |`);
    data += chunk;
    
});

// then a listener that will listen for the end event on the stream and it will show us the length of the variable that we have concatenated.

stream.once("end", function(){
    
    console.log("\n\n\n");
    console.log("Started Reading File");
    console.log("\n\n\n");
});