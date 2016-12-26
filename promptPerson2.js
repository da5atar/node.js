var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;
    
    // use a Writable Stream:

	var stream = fs.createWriteStream(realPerson.name + ".md"); // We gonna write to this file.

	stream.write(`${realPerson.name}\n==================\n\n`); 

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		if (saying.toLowerCase().trim() === 'exit') {
			stream.close(); // closes the stream
			rl.close();
		} else {
            realPerson.sayings.push(saying.trim());
            // write to the stream:
		    stream.write(`* ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();
	
});



