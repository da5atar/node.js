var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server); 
/* Socket.IO is a function, and when you invoke the Socket.IO function you need to send it the server that it should listen for incoming connections on. So here we are invoking the Socket.IO function by sending it the HTTP server that we created with the Express app. */

app.use(express.static("./public")); // using express static middleware to server the web files found in the public/

/* With Socket.IO, we don't actually connect to the pure websocket. Socket.IO handles all of the connections for us. io.on("connection") will listen for an incoming Socket.IO connection. this represents one socket endpoint that's connected.*/
io.on("connection", function(socket) {

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message); // assuming that the user has entered a chat message.
    });

	socket.emit("message", "Welcome to Cyber Chat"); // emitting a special type of event (welcome).

});

console.log("Starting Socket App - http://localhost:3000");