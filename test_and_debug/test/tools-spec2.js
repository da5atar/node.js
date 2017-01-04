var expect = require("chai").expect;
var tools = require("../lib/tools2");
var nock = require("nock"); 

describe("Tools", function() {

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});

	describe("loadWiki()", function() {
        //code that we want to run before running every test in this suite
		before(function() {
            // use nock to create a mock web server
			nock("https://en.wikipedia.org")
			    .get("/wiki/Lauryn_Hill")
			    .reply(200, "Mock Lauryn Hill's Page"); //  1. specify my mock web domain name, 2. type of request we are mocking, 3. what "nock" should reply with?
            
		});
        /*  we have gotten in between this test and its request for Wikipedia by mocking a fake Wikipedia server for get requests to Lauryn Hill's @ wikipedia.

        Any code that makes a get request for that server will actually be hitting our mock server instead. The test that makes that request is right here on line 26. Invoking "tools.loadWiki" should actually cause a request to occur for our "nock" server. And the HTML that's going to be returned is now limited to the string that we defined on line 20. */
		it("Load Lauryn's Hill wikipedia page", function(done) {

			tools.loadWiki({ first: "Lauryn", last: "Hill"}, function(html) {
				expect(html).to.equal("Mock Lauryn Hill's Page");
				done();
			});

		});

	});

});


