var expect = require("chai").expect;
var tools = require("../lib/tools"); // we need to include the module where the code to be tested "lives".
// describe() is a mocha function
describe("printName()", function(){
    // for each test, we will use an it func
    it("should print the last name first", function(){
        // when we write a test, we simply want to invoke the item that we are testing:
        var results = tools.printName({first: "Mass", last: "Sow"}); //  this is how we would like to work with the unit test. Here we should be able to sent this function an object that represents a person.
        // and expects:
        expect(results).to.equal("Sow, Mass");
        
    });
    
});