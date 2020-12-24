"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ultil_1 = require("./ultil");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.reader.data.map(function (row) {
            return [
                ultil_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                row[3] ? parseInt(row[3]) : 0,
                row[4] ? parseInt(row[4]) : 0,
                row[5],
                row[6]
            ];
        });
    };
    return MatchReader;
}());
exports.default = MatchReader;
