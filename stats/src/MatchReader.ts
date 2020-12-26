import { MATCH_RESULT } from "./MatchResults";
import { dateStringToDate } from "./ultil";
type MatchData = [Date, string, string, number, number, string, string]
interface DataReader {
    read(): void;
    data: string[][]
}
class MatchReader {
    matches: MatchData[] = []
    constructor(public reader: DataReader) { }
    load(): void {
        this.reader.read();
        this.reader.data.map((row: string[]) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                row[3] ? parseInt(row[3]) : 0,
                row[4] ? parseInt(row[4]) : 0,
                row[5] as MATCH_RESULT,
                row[6]
            ]
        })
    }
}
export default MatchReader  