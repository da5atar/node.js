var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){ // request will be sent as the first argument and the response will be sent as the second argument.
    // Check if we have a GET, to serve the form
    if (req.method === "GET") {
        // fill out the headers of our response
    res.writeHead(200, {"Content-Type": "text/html"});
    // Create a read Stream for our form:
    fs.createReadStream("./public/form.html", "UTF-8").pipe(res); // pipes read Stream to the res which will stream this file to the client
    } else if (req.method === "POST") {
        
        var body = ""; // to grab all stream chunks
        
        req.on("data", function(chunk){
            body += chunk;
        });
        
        req.on("end", function(){
           
            res.writeHead(200, {"Content-Type": "text/html"});
            
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form results</h1>
                        <p>${body}</p> <!-- You'll notice this is URL Encoded -->
                    </body>
                </html>
            
            `);
            
        });
    }
    
    
    
}).listen(3000); 

/* If we actually needed to grab the POSTed form variables and send them to a database, we wouldn't be finished yet. You can see that our form variables are URL encoded  */

console.log("Form server listening on port 3000");