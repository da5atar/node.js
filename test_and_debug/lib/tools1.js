var https = require("https"); // because wikipedia uses https

module.exports = {

	printName(person) {
		return `${person.last}, ${person.first}`;
	},

	loadWiki(person, callback) {

		var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
        // note: get is a helper function
		https.get(url, function(res) {

			var body = ""; // to gather the stream of html text in the response

			res.setEncoding("UTF-8"); // make sure the res encoding is text

			res.on("data", function(chunk) {
				body += chunk;
			});

			res.on("end", function() {
				callback(body); // this is where we invoke the callback func defined in tools-spec1.js and send the page.
			});
		});

	}

};