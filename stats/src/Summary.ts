import WinAnalysis from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import ConsoleReports from "./reportTargets/ConsoleReports";
import HtmlReport from "./reportTargets/HtmlReport";
export interface Analyzer {
    run(matches:MatchData[]):string;
}
export interface OutputTarget {
    print(report:string):void;
}
export default class Summary {
    constructor(public analyzer:Analyzer,public outputTarget:OutputTarget){}
    buildAndPrintReport(matches:MatchData[]):void{
       const output = this.analyzer.run(matches);
       this.outputTarget.print(output)
    }
    static winsAnalysisWithHtmlReport(team:string):Summary{
        const manUWinAnalysis = new WinAnalysis(team);
        const manUConsoleReports = new HtmlReport();
        return new Summary(manUWinAnalysis,manUConsoleReports)
    }
} 