// Create a new webSocket instance:
var ws = new WebSocket("ws://localhost:3000");

// use the ws instance to wire up event handlers:
ws.onopen = function(){
    setTitle("Connected to Cyber Chat");
};

ws.onclose = function(){
    setTitle("DISCONNECTED");
};

ws.onmessage = function(payload){
  printMessage(payload.data);  
}; // to print received messages to the DOM

// whenever a user enters a new message, this function will fire and we will gather that message from the input:
document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    input.value = '';
};
// function for setting the title that will actually set the title of the <h1>
function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}
// function for printing the message. Every time we print a message, we can use the print message function and this will create a new paragraph, set the text of the paragraph to our message, and add our message to the DOM.
function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
