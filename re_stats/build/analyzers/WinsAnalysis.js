"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResults_1 = require("../MatchResults");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
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
    return WinsAnalysis;
}());
exports.default = WinsAnalysis;
