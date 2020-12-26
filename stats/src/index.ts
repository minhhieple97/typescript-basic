import { WinAnalysis } from "./analyzers/WinsAnalysis";
import CsvFileReader from "./CsvFileReader";
import MatchReader from "./MatchReader";
import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { Summary } from "./Summary";
const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader);
matchReader.load()
// console.log(matchReader.matches);
const manUWinAnalysis = new WinAnalysis('Man United');
const manUConsoleReports = new ConsoleReports();
const manUSummary = new Summary(manUWinAnalysis,manUConsoleReports);
manUSummary.buildAndPrintReport(matchReader.matches)
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