"use strict";
exports.__esModule = true;
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }
    Bag.prototype.totalWeight = function () {
        var sum = 0;
        this.presents.forEach(function (present) {
            sum = sum + present.weight;
        });
        return sum;
    };
    Bag.prototype.addPresent = function (present) {
        if (this.totalWeight() + present.weight > this.maxWeight) {
            console.log("Sorry the weight was exceeded! TOO HEAVY!");
            return false;
        }
        if (this.bagType === BagType_1.BagType.Paper &&
            present.presentType === PresentType_1.PresentType.Soft) {
            console.log("Sorry the bag type is wrong! Change it to proceed forward");
            return false;
        }
        this.presents.push(present);
        return true;
    };
    return Bag;
}());
exports.Bag = Bag;
