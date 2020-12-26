"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var ultil_1 = require("./ultil");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader(filename) {
        var _this = _super.call(this, filename) || this;
        _this.filename = filename;
        _this.data = [];
        return _this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            ultil_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            row[3] ? parseInt(row[3]) : 0,
            row[4] ? parseInt(row[4]) : 0,
            row[5],
            row[6]
        ];
    };
    return MatchReader;
}(CsvFileReader_1.default));
exports.default = MatchReader;
