"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var ConsoleReport_1 = __importDefault(require("./reportTargets/ConsoleReport"));
var Summary_1 = __importDefault(require("./Summary"));
var csvFileReader = new CsvFileReader_1.default('football.csv');
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var data = matchReader.matches;
var manUWinAnalysis = new WinsAnalysis_1.default('Man United');
var manUConsoleReport = new ConsoleReport_1.default();
var manUReport = new Summary_1.default(manUWinAnalysis, manUConsoleReport);
console.log(manUReport.buildAndPrintReport(data));
