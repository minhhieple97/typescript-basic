"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection = /** @class */ (function () {
    function NumberCollection(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    NumberCollection.prototype.compare = function (x, y) {
        if (this.arr[x] > this.arr[y]) {
            this.swap(x, y);
        }
    };
    NumberCollection.prototype.swap = function (i, j) {
        var temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    };
    return NumberCollection;
}());
exports.default = NumberCollection;
