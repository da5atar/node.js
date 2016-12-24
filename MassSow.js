/* var events = require('events');

var emitter = new events.EventEmitter(); // EventEmitter is a constructor, and we're going to create a new instance of the EventEmitter.

emitter.on('customEvent', function(message, status){
 
   console.log(`${status}: ${message}`);
 
 }); // this callback function will be invoked asynchronously.

 emitter.emit('customEvent', "Hello World", 200);  */

/*============================================================================*/

var EventEmitter = require('events').EventEmitter;
var util = require('util'); //The utilities module has an inherits function, and it's a way that we can add a object to the prototype of an existing object. 

var Person = function(name){
  this.name = name;  
};

util.inherits(Person, EventEmitter); // just added the EventEmitter to the Person's prototype

var mass = new Person("Massamba Sow");

mass.on('speak', function(said){
    
    console.log(`${this.name}: ${said}`);
    
});

mass.emit('speak', "I'm enjoying this actually.");