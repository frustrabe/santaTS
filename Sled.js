"use strict";
exports.__esModule = true;
exports.Sled = void 0;
var bag_1 = require("./bag");
var BagType_1 = require("./BagType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.bags = [];
        this.santa = santa;
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) {
        this.santa = santa;
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (present) {
        // Checking the weight not exceeding the amount so it doesnt follow through
        if (present.weight > 10) {
            return false;
        }
        // Initial bag
        var ourBag;
        // If no bags are on sled
        if (this.bags.length === 0) {
            // Make a new bag
            ourBag = new bag_1.Bag(10, BagType_1.BagType.Canvas);
            // Add the present to the bag
            ourBag.addPresent(present);
            // Add bag to the sled
            this.addBag(ourBag);
            return;
            // If bags on sled
        }
        else {
            // Get the last bag on the sled
            ourBag = this.bags[this.bags.length - 1];
            // Trying to add the present to the bag
            if (ourBag.addPresent(present) === false) {
                // Make a new bag
                ourBag = new bag_1.Bag(10, BagType_1.BagType.Canvas);
                // Add the present to the bag
                ourBag.addPresent(present);
                // Add bag to the sled
                this.addBag(ourBag);
            }
            // Add present to the bag
        }
    };
    return Sled;
}());
exports.Sled = Sled;
