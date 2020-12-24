"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var MatchResults_1 = require("./MatchResults");
var reader = new MatchReader_1.default('football.csv');
reader.read();
console.log(reader.data);
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MATCH_RESULT.HOME_WIN)
        manUnitedWins++;
    else if (match[1] === 'Man United' && match[5] === MatchResults_1.MATCH_RESULT.AWAY_WIN)
        manUnitedWins++;
}
console.log("Man united won " + manUnitedWins + " games");
