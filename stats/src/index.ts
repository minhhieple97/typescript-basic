import MatchReader from "./MatchReader";
import  Summary  from "./Summary";
// const csvFileReader = new CsvFileReader('football.csv')
const matches =  MatchReader.loadCsvFile('football.csv').load();
console.log(matches)

const manUSummary = Summary.winsAnalysisWithHtmlReport('Man United');
manUSummary.buildAndPrintReport(matches)


// Inheritance vs Composition
// Inheritance là mối quan hệ is a
// Composition là mối quan hệ has a
// Best Pratice là Composition sẽ được ưu tiên hơn Inheritance