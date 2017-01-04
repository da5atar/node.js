var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order2");

var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		this.console = {
			log: sinon.spy()
		};
        // we are also going to add a warehouse that has a packageAndShip func
        this.warehouse = {
            packageAndShip: sinon.stub().yields(10987654321)
        };
        
		order.__set__("inventoryData", this.testData);
		order.__set__("console", this.console);
        order.__set__("warehouse", this.warehouse); // inject our mock warehouse
	});

	it("order an item when there are enough in stock", function(done) {

		var _this = this;

		order.orderItem("CCC", 3, function() {

			expect(_this.console.log.callCount).to.equal(2);

			done();
		});

	});
    
    
    
    describe("Warehouse interaction", function(){
        //execute the order in a hook
        beforeEach(function(){
            
            this.callback = sinon.spy();
            // order 2 "CCC" items and fire a callback (spy to check if the callback is called defined on line 50)
            order.orderItem("CCC", 2, this.callback);
        });    
            
        // tests that a successful order receives a tracking number
        it("receives a tracking number", function(){
            // make sure we received the appropriate tracking #:
            expect(this.callback.calledWith(10987654321)).to.equal(true);
        });
        // ...and calls packageAndShip
        it("calls packageAndShip with the correct sku and quantity", function(){
            //...to make sure we are ordering 2 "CCC"
             expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
            
        });
        
        
    });

});