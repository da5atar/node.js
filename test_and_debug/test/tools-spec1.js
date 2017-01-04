var expect = require("chai").expect;
var tools = require("../lib/tools1");

// Notice describe functions can be nested
describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Mass", last: "Sow"});
			expect(results).to.equal("Sow, Mass");
		});
	});

	describe("loadWiki()", function() {

		this.timeout(5000);
        //function for loading the wiki page
		it("Load Lauryn Hill's wikipedia page", function(done) {
            // the callback func in loadWiki is asynchronous 
			tools.loadWiki({ first: "Lauryn", last: "Hill"}, function(html) {
				expect(html).to.be.ok; // when the callback function is invoked and html returned, we should have our html var defined
				done(); /* whenever you want to do an asynchronous test with Mocha, in the function that we actually add to the it statement, we have the option of adding a variable that becomes a function that Mocha will wait to run the test Mocha is waiting for that Done variable to be invoked.*/
			});

		});

	});

});


