// export a (object)literal that would have all of my tools
module.exports = {
  printName(person){
     return `${person.last}, ${person.first}`; 
  }  
}; /* printName() is defined using Object Literal Enhancements: new way of definding functions within an object literal that is available to us with ES6. Since we are using Node.js version 4.1 and up, we can use some ES6 syntax. */