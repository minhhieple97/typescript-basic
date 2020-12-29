import WinsAnalysis from "./analyzers/WinsAnalysis";
import CsvFileReader from "./CsvFileReader";
import MatchReader from "./MatchReader";
import ConsoleReport from "./reportTargets/ConsoleReport";
import Summary from "./Summary";
const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const data = matchReader.matches;
const manUWinAnalysis = new WinsAnalysis('Man United');
const manUConsoleReport = new ConsoleReport();
const manUReport = new Summary(manUWinAnalysis, manUConsoleReport);
console.log(manUReport.buildAndPrintReport(data))