var https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Lauryn_Hill",
    method: "GET"
}; // in order to make a request with the HTTP or HTTPS module, we need an object literal of options/details about the request. 

var req = https.request(options, function(res){
    // note: response object actually implements the stream interface. the page is sent to us as a stream
    var responseBody = ""; // to concatenate the details of this page
    
    console.log("response from server started");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);
    
    res.setEncoding("UTF-8"); // set that stream encoding to UTF-8
    
    res.once("data", function(chunk){
        console.log(chunk);
    });
    
    res.on("data", function(chunk){
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });
    
    res.on("end", function(){
        fs.writeFile("lauryn.hill.html", responseBody, function(err){
            if (err){
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on("error", function(err){
    console.log(`Problem with request: ${err.message}`);
});

req.end();