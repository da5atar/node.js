var inventoryData = require('../data/inventory');
var warehouse = require('./warehouse');

function findItem(sku) {
    var i = inventoryData.map(item => item.sku).indexOf(sku);
    if (i === -1) {
        console.log(`Item - ${sku} not found`);
        return null;
    } else {
        return inventoryData[i];
    }
}
function isInStock(sku, qty) {
    var item = findItem(sku);
    return item && item.qty >= qty;
}
/* If you look at this order function, on line 23 we are actually sending a packageAndShip call to the warehouse. We send it the sku of an order item, the quantity, and presumably the warehouse is actually going to package and ship that item. They will go find the item on the shelf, put it in a box, ship it, and give us a tracking number back in the callback function that we send to the packageAndShip method. So we actually don't want to package and ship any orders when testing the warehouse function, and we also notice that the warehouse function will take some time.
When we actually order an item, it takes a little bit of time for this warehouse to package and ship our item. If we have a lot of tests, testing the order function could actually make our test run for a long time. So we're going to get a double benefit out of mocking out the warehouse and also mapping out the packageAndShip function with a Sinon spy.*/
function order(sku, quantity, complete) {
    complete = complete || function () {};
    if (isInStock(sku, quantity)) {
        console.log(`ordering ${quantity} of item # ${sku}`);
        warehouse.packageAndShip(sku, quantity, function (tracking) {
            console.log(`order shipped, tracking - ${tracking}`);
            complete(tracking);
        });
        return true;
    } else {
        console.log(`there are not ${quantity} of item '${sku}' in stock`);
        return false;
    }
}

module.exports.orderItem = order;