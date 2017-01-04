var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order1");
/* what we're going to do is we're going to use a Sinon spy for console.logs, just to make sure that the console.log was called appropriately without having to actually log anything to the console.*/
var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];
        // create mock console
        this.console = {
            log: sinon.spy() // This spy will give us details about how console.log is called and with what data console.log is called.
        };
        
		order.__set__("inventoryData", this.testData);
        order.__set__("console", this.console);

	});

	it("order an item when there are enough in stock", function(done) {
        // next, we will make sure those console.logs were actually called:
        var _this = this; // protect the scope of this: reason is this refer to the mocha object and _this the object we can use into...
		order.orderItem("CCC", 3, function() {
            // ... this callback when the mocha object will fall out of scope
            expect(_this.console.log.callCount).to.equal(2); // expect that _this.console, the one that we created, the log function, our Sinon spy, has a callCount of two, because we need the console.log to have been called only twice by this point.
            
			done();
		});

	});

});