var http = require("http");

var data = require("./data/inventory"); // we can also require JSON files with the common JS module pattern, now, that data variable will represent JSON data.

http.createServer(function(req, res){
    // when creating a JSON server, all we need to do is identify the content that we are responding with as JSON:
    if (req.url === "/"){
       res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(data)); // return data as JSON string       
    } else if (req.url === "/instock") {
        listInStock(res);     
    } else if (req.url === "/onorder"){
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Whooops...Data not found");
    }

}).listen(3000);

console.log("Server litsnening on port 3000");

// Adding functions that will help us search for data:
function listInStock(res){
    
    var inStock = data.filter(function(item){
        return item.avail === "In stock";
    }); // We use the filter function to filter out those data objects in our array for specific details.
    res.end(JSON.stringify(inStock));
    
}

function listOnBackOrder(res){
    
    var onOrder = data.filter(function(item){
        return item.avail === "On back order";
    }); // Notice the filter takes in a Predicate func to return True or False for adding an item in the new array.
    res.end(JSON.stringify(onOrder));
}

//  These are the techniques that we will need to construct APIs, or middle tier web applications, that just serve JSON data to clients.