var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser"); // middleware that will help us parse the data POSTed to this API
var app = express();

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

app.use(bodyParser.json()); // parses data sent as JSON
app.use(bodyParser.urlencoded({ extended: false })); // parses body data which is sent url-encoded. the only arg extended is set to true when you have large amount of nested data to parse. 

/* by now, we have parsed all the variables that are posted to this application, and placed them neatly on the request object */

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`); // log any POST data that we might have.
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

// add our POST route.
app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});
/* add our delete route: What we need to do is set up a route with a routing variable for the skier term, so that we know which term you would like to delete. Below we have created a routing variable with a colon and with the param "term", The value of this variable will be whatever is found in the route after dictionary-api on a DELETE request. */

app.delete("/dictionary-api/:term", function(req, res) {
    // The filter function will take in a callback function (predicate). And this callback function will be invoked once for every term found in the skierTerms array.
    
    skierTerms = skierTerms.filter(function(definition) {
        
        return definition.term.toLowerCase() !== req.params.term.toLowerCase(); // The routing variable is going to be available to us on req.params.term
        
    });
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;