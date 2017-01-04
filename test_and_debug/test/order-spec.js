var expect = require("chai").expect;
var rewire = require("rewire");
var order = rewire("../lib/order"); // loading with rewire, now we can can get or set private variables (our mock test data) in that module

describe("Ordering Items", function(){
    // add code that will execute before each of our text:
    beforeEach(function(){
        // set test data
        this.testData = [
            {sku: "AAA", qty: 10},
            {sku: "BBB", qty: 0},
            {sku: "CCC", qty: 3}
        ]; // we do not need full inventory items for our test data. The order function is really only checking in the products' queue, and the quantity of the product that is in stock.
        
        // inject this test data.
        order.__set__("inventoryData", this.testData); // __set__ sets private var because we loaded order.js with rewire. 'this' is the mocha object, means we can actually use 'testData' in our test
    });
    
    it("Order an item when there aren't enough in stock", function(done){
        // try to submit a sample order with 'testData'
        
        order.orderItem("CCC", 3, function(){
           done(); // ordering of an item is an asynchronous process, the actual ordering of an item in our module will send that order to the warehouse, and it will take some time for that order to actually get packaged and shipped.
        });
        
    });
    
});