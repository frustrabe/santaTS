"use strict";
exports.__esModule = true;
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.print = function () {
        console.log(this.presentType, this.weight);
    };
    Present.prototype.getName = function () {
        return this.name;
    };
    return Present;
}());
exports.Present = Present;
