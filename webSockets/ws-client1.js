
var ws = new WebSocket("ws://localhost:3000");

ws.onopen = function() {
	setTitle("Connected to Cyber Chat");
};

ws.onclose = function() {
	setTitle("DISCONNECTED");
};

ws.onmessage = function(payload) {
	printMessage(payload.data);
};

// Whenever a user enters a new message, the document forms on.submit handler will fire, and this is where we can actually collect the new message from a user:
document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value); // send the input.value (what the user entered) back to the socket server.
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
