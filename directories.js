var fs = require("fs");

/*============================================================================*/

/* fs.rename("./assets/logs", "./logs");

console.log("Directory moved"); */

/*============================================================================*/

fs.rmdir("./assets", function(err){
    
    if (err){
        throw err;
    }
    
    console.log("Assets Directory Removed");
    
});

/*============================================================================*/

// you can not remove a directory unless it is empty. 

fs.readdirSync("./logs").forEach(function(fileName){
    
    fs.unlinkSync("./logs/" + fileName);
    
});

// removing directory

fs.rmdir("./logs", function(err){
    
    if (err){
            throw err;
        }
        
        console.log("Logs Directory removed"); 
    
});