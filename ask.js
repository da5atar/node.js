//process.stdout.write("Hello ");

//process.stdout.write("Hello \n\n\n\n"); 

/*Process standard output will write strings to the terminal, however it does not give you new lines automatically.*/

/*============================================================================*/

/* var questions = [
  "What is your name?",
    "What is your favorite hobby?",
    "What is your favorite programming language?"
];

var answers = [];

function ask(i){
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write(" > "+"\n");
}

// wire up an event listener for data on the standard input object.

process.stdin.on('data', function(data){
    
    process.stdout.write('\n' + data.toString().trim() + '\n');
    
}); 

ask(0);

/* This is the first time we're using node.js asynchronously. We are waiting for some input and when we add that input it will be handled with that asynchronous callback. */

/*============================================================================*/

var questions = [
  "What is your name?",
    "What is your favorite hobby?",
    "What is your favorite programming language?"
];

var answers = [];

function ask(i){
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write(" > "+"\n");
}

// wire up an event listener for data on the standard input object.

process.stdin.on('data', function(data){
    
   answers.push(data.toString().trim());
    if(answers.length < questions.length){
        
        ask(answers.length);
    } else {
        process.exit();
    }
    
}); 

process.on('exit', function(){
    
            process.stdout.write("\n\n\n\n");
            process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} late`);    
            process.stdout.write("\n\n\n\n");

});

ask(0);