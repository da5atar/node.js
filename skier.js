var express = require("express"); /* do not need to add a path to the Node Modules folder when requiring installed packages... 
Node.js knows to go look in the Node Modules folder */

// Create an express app instance:
var app = express();

/* Add middleware to log details about the request (each piece of middleware is a function that has three arguments: the request, the response, and the next function that you will invoke once you are finished).  */
app.use(function(req, res, next){
    
   console.log(`${req.method} request for ${req.url}`); // see what type of request made from the req object
    next(); // Our requests are presently being served in the next piece of middleware under express.static.
    
});

/* Add middleware to this application. You can think of middleware as being customized plugins that we can use with Express to add functionality to our application.*/
app.use(express.static("./public")); /* invokes the static file server that comes with express and add it to our app pipeline as a piece of middleware. The func arg is the name of the directory we would like to serve static files from.*/

app.listen(3000);
console.log("Express app running on port 3000");

// Export app module: 
module.exports = app; // to include this app instance in other files
