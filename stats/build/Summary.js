"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var HtmlReport_1 = __importDefault(require("./reportTargets/HtmlReport"));
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    Summary.winsAnalysisWithHtmlReport = function (team) {
        var manUWinAnalysis = new WinsAnalysis_1.default(team);
        var manUConsoleReports = new HtmlReport_1.default();
        return new Summary(manUWinAnalysis, manUConsoleReports);
    };
    return Summary;
}());
exports.default = Summary;
