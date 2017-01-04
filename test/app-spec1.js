var request = require("supertest");
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../skier3');
var cheerio = require("cheerio");


describe("Dictionary App", function () {

    it("Loads the home page", function(done){
        request(app).get("/index-skier.html").expect(200).end(function(err, res){
            // res in this case will be HTML, we will use cheerio to search the DOM JQery style
            var $ = cheerio.load(res.text); // loads the response text in cheerio and assigning it to the $ alias, now we can search the response like  DOM
            var pageHeading = $("body>h1:first-child").text();
            expect(pageHeading).to.equal("Skier Dictionary");
            done();
            
        }); 
    }); 

    describe("Dictionary API", function () {
        
        beforeEach(function () {

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

        it("GETS dictionary-api", function(done){
            var defs = this.defs // protecting the scope for this
            request(app).get("/dictionary-api").expect(200).end(function(err,res){
                // check the data that gets returned from our get request to the dictionary-api
                var terms = JSON.parse(res.text); // our terms that get returned when we make a get request of this api, should be JSON text. Now terms is an array.
                expect(terms).to.deep.equal(defs); // to.deep.equal compares exactly 2 objects
                done(); // we need to invoke mocha's done() as well when test is finished.
                
            }); 
        });

        it("POSTS dictionary-api", function(done){
            request(app)
                .post("/dictionary-api")
                .send({"term": "Three", "defined": "Term Three Defined"})
                .expect(200)
                .end(done);
        });

        it("DELETES dictionary-api", function(done){
            request(app)
                .delete("/dictionary-api/One")
                .expect(200)
                .end(done); 
        });
    });
});