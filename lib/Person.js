var EventEmitter = require('events').EventEmitter;
var util = require('util'); 

var Person = function(name){
  this.name = name;  
};

util.inherits(Person, EventEmitter); 

module.exports = Person;

/* These variables that we create in this file are local to this module. That means that everything in this file is private and cannot be consumable by another module. If we would like to make items consumable by other Javascript files, we can export them on module.exports.

module.exports is a Javascript object. We can use it like any Javascript object. We can dot notate on it, bracket notate, set it to an object literal or any Javascript type. 

 In this case, we are setting module.exports to our person constructor function. Module.exports is the object that is returned by the require statement. When we require this module, we will return anything that is on module.exports. */