
/* var waitTime = 3000; // times are handled in milliseconds, which is why 3000 milliseconds will equal three seconds.

console.log("Wait for it");

//setTimeout will create a delay of a certain time before invoking the callback func:
setTimeout(function(){
    
    console.log("done")
    
}, waitTime ); */

/*============================================================================*/

/* var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("Wait for it");

// setInterval will fire the callback function over and over again on an interval time.
setInterval(function(){
    
    currentTime += waitInterval; // how long we've been waiting
    
    console.log(`waiting ${currentTime/1000} seconds...`);
    
}, waitInterval);

setTimeout(function(){
    
    console.log("done")
    
}, waitTime ); */

/*=====   The clearTimeout and clearInterval functions are used to stop intervals or stop any timeouts that we might have currently in our application. =====*/

/* var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("Wait for it");
// we first need to set a variable instance to that interval...
var interval = setInterval(function(){
    
    currentTime += waitInterval; // how long we've been waiting
    
    console.log(`waiting ${currentTime/1000} seconds...`);
    
}, waitInterval);

setTimeout(function(){
//...use that interval variable in a clearInterval will stop this interval from running.  
    clearInterval(interval);
    console.log("done")
    
}, waitTime ); */

/*========display the time waiting in a percentage and also control the standard output========*/

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100; // 1/10 of a second
var percentWaited = 0;

function writeWaitingPercent(p){ 
    process.stdout.clearLine(); // to clear the last line inside of the Terminal.
    process.stdout.cursorTo(0); // will move our cursor back to the beginning of the line.
    process.stdout.write(`waiting ... ${p}%`);// write the percentage that we've been waiting.   
}

var interval = setInterval(function(){  
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime)* 100);// Calculate the % waited inside of the interval
    writeWaitingPercent(percentWaited);  
}, waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n done")  
}, waitTime );

process.stdout.write("\n");
writeWaitingPercent(percentWaited); // When starting this application, we should see that we waited 0%