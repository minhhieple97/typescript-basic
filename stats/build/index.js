"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.default('football.csv');
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
// console.log(matchReader.matches);
var manUWinAnalysis = new WinsAnalysis_1.WinAnalysis('Man United');
var manUConsoleReports = new ConsoleReports_1.ConsoleReports();
var manUSummary = new Summary_1.Summary(manUWinAnalysis, manUConsoleReports);
manUSummary.buildAndPrintReport(matchReader.matches);
// let manUnitedWins = 0;
// for (const match of matchReader.matches) {
//     if (match[1] === 'Man United' && match[5] === MATCH_RESULT.HOME_WIN) manUnitedWins++;
//     else if (match[1] === 'Man United' && match[5] === MATCH_RESULT.AWAY_WIN) manUnitedWins++;
// }
// console.log(`Man united won ${manUnitedWins} games`)
// Inheritance vs Composition
// Inheritance là mối quan hệ is a
// Composition là mối quan hệ has a
// Best Pratice là Composition sẽ được ưu tiên hơn Inheritance
