"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var win = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === MatchResults_1.MATCH_RESULT.HOME_WIN)
                win++;
            else if (match[1] === this.team && match[5] === MatchResults_1.MATCH_RESULT.AWAY_WIN)
                win++;
        }
        return ("Team " + this.team + " won " + win + " games");
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
