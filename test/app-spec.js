var request = require("supertest");
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../skier3');

describe("Dictionary App", function () {

    it("Loads the home page", function(done) {  request(app).get("/").expect(200).end(done); // With SuperTest we can chain on a end() that takes in a callback to invoke when the test is finished. here mocha's done
    }); // test stub to check if we load the home page

    describe("Dictionary API", function () {

        beforeEach(function () {
            // fake data to be injected before each test:
        	this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api", function(done) {
            request(app).get("/dictionary-api").expect(200).end(done);
        });

        it("POSTS dictionary-api", function(done) {
            request(app)
               .post("/dictionary-api")
               .send({ "term": "Three", "defined": "Term Three Defined"})
               .expect(200)
               .end(done);
        });

        it("DELETES dictionary-api", function(done) {
            request(app)
               .delete("/dictionary-api/One")
               .expect(200)
               .end(done); // do not forget to add the done func to mocha's test callback
        });

    });

});