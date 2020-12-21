"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = __importDefault(require("./NumberCollection"));
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        if (typeof this.collection === 'string') {
            var convertToArray = this.collection.split('');
            var length_1 = convertToArray.length;
            for (var i = 0; i < length_1; i++) {
                for (var j = 0; j < length_1 - i - 1; j++) {
                    if (convertToArray[j] < convertToArray[j + 1]) {
                        var leftHand = convertToArray[j];
                        convertToArray[j] = convertToArray[j + 1];
                        convertToArray[j + 1] = leftHand;
                    }
                }
            }
            this.collection = convertToArray.join();
        }
        if (Array.isArray(this.collection)) {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    var arr = new NumberCollection_1.default(this.collection);
                    arr.compare(j, j + 1);
                    arr.swap(j, j + 1);
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
var collection = new Sorter([1, -1, 4, 0, 6, 4, 3]);
// const collection  = new Sorter('ABJCxyz')
collection.sort();
