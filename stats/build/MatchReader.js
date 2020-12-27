"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var ultil_1 = require("./ultil");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.loadCsvFile = function (fileName) {
        return new MatchReader(new CsvFileReader_1.default(fileName));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
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
        return this.matches;
    };
    return MatchReader;
}());
exports.default = MatchReader;
