import { MatchData } from './MatchData'
export interface Analyzer {
    run(matches: MatchData[]): string
}
export interface OutputTarget {
    print(report: string): void
}
class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {

    }
    buildAndPrintReport(data: MatchData[]) {
        return this.analyzer.run(data)
    }
}
export default Summary