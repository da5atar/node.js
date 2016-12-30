var express = require("express");
var cors = require("cors");
var app = express();

// Add some data: skier terms
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

/* The dictionary api, by default, is only allowed to serve this data to requests made for it from the same domain name.
Cors specific module is a piece of middleware that we can add to our Epress pipeline to solve this problem, This means that any domain can make a request for our dictionary api. */
app.use(cors());

/* we are going to define the dictionary api route to return our terms and definitions. 
 The first argument that it takes is the location for that route, so this is going to be at /dictionary-api. And the second argument is going to be the function that will actually handle any requests for that specific route. This function will take in our request object and our response object. Now these are the same request and response objects that we used with the http server, but they've been powered up by Express. Express has decorated these objects, has added some functionality to them to make things easy for us.
 For instance, the response object now has a json function. In the response, json function will simply take a json object, like our skiier terms and automatically handle stringifying it, and setting up the headers to reply with a json response.*/

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;