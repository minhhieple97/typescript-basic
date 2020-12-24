import CsvFileReader from "./CsvFileReader"
import { MATCH_RESULT } from "./MatchResults"
import { dateStringToDate } from "./ultil"
type MatchData = [Date, string, string, number, number, string, string]
class MatchReader extends CsvFileReader<MatchData> {
    public data: MatchData[] = []
    constructor(public filename: string) {
        super(filename)
    }
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            row[3] ? parseInt(row[3]) : 0,
            row[4] ? parseInt(row[4]) : 0,
            row[5] as MATCH_RESULT,
            row[6]
        ]
    }
}
export default MatchReader