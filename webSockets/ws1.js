var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	ws.on("message", function(message) {
         // the websocket that is newly connected is passed as an argument. So, we can actually add listeners to the websocket here:

		if (message === 'exit') {
			ws.close();
		} else {

			wss.clients.forEach(function(client) {
				client.send(message);
			});

		}

	});

	ws.send("Welcome to cyber chat");

});

console.log("Web Socket Server Started on port 3000");