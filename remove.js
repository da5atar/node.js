var fs = require("fs");

// use try-catch block not to throw errors when making Sync requests.
try {
    fs.unlinkSync("./lib/config.json");
} catch (err){
    console.log(err);
}

fs.unlink("notes.md", function(err){
    
    if (err) {
        console.log(err);
    } else {
        console.log("Notes.md removed");
    }
    
    
});
