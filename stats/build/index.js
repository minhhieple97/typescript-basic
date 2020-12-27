"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var Summary_1 = __importDefault(require("./Summary"));
// const csvFileReader = new CsvFileReader('football.csv')
var matches = MatchReader_1.default.loadCsvFile('football.csv').load();
console.log(matches);
var manUSummary = Summary_1.default.winsAnalysisWithHtmlReport('Man United');
manUSummary.buildAndPrintReport(matches);
// Inheritance vs Composition
// Inheritance là mối quan hệ is a
// Composition là mối quan hệ has a
// Best Pratice là Composition sẽ được ưu tiên hơn Inheritance
