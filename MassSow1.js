/* When we've been requiring core modules, we simply require them by name. When we require A custom module in our file system, we actually have to put the path to that module.  */
var Person = require("./lib/Person");

var mass = new Person("Massamba Sow");
var alice = new Person("Alice Beh");

alice.on('speak', function(said){
   
    console.log(`${this.name} -> ${said}`);
    
});

mass.on('speak', function(said){
    
    console.log(`${this.name}: ${said}`);
    
});

mass.emit('speak', "I'm enjoying this actually.");
alice.emit('speak', "I too have said that: It is far better to be alone, than to be in bad company.");