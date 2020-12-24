"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var ultil_1 = require("./ultil");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
        this.filename = filename;
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split('\n')
            .map(function (el) {
            return el.split(',');
        })
            .map(function (el) {
            ;
            return [
                ultil_1.dateStringToDate(el[0]),
                el[1],
                el[2],
                el[3] ? parseInt(el[3].toString()) : 0,
                el[4] ? parseInt(el[4].toString()) : 0,
                el[5],
                el[6]
            ];
        });
        console.log(this.data);
    };
    CsvFileReader.prototype.serializer = function () {
        this.data = this.data.map(function (el) {
            el[0] = new Date(el[0]);
            return el;
        });
    };
    return CsvFileReader;
}());
exports.default = CsvFileReader;
