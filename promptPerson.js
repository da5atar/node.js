var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout); 
/* instance of the readline object which will create prompt by sending it the standard input and standard output objects.Readline is going to control these objects for us asking questions and collecting information so that we don't have to control the process.stdin and stdout directly. */

var realPerson = {
    name: '',
    sayings: []
};


rl.question("What is the name of a real person? ", function(answer){
    
    realPerson.name = answer;
    
    rl.setPrompt(`What would ${realPerson.name} say? `); // use the readline to set up a prompt so that we can ask a question over and over again.
    
    //console.log(answer);
    
    rl.prompt();
    
    rl.on('line', function(saying){
        
        realPerson.sayings.push(saying.trim());
        
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
       
            //console.log(saying.trim());
            rl.prompt();
        }

    });
    
});

rl.on('close', function(){
    
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    
    process.exit();
    
});