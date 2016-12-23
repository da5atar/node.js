// console.log(process.argv);

// let's create a function that will help us grab the values from the process.argv array from their flag name.

function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab("--user");

if(!user || !greeting){
    console.log("You blew it");
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}