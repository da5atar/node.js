var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port: 3000}); // this will create a new Web Socket Server that runs on its own protocol, And we can connect it with WS:// as opposed to HTTP://

// listener for new connections
wss.on("connection", function(ws){
   
    ws.send("Welcome to cyber chat");
    
}); 

