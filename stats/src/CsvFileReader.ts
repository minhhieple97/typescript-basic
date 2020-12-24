import { timeStamp } from 'console';
import fs from 'fs'
import { type } from 'os';
import { MATCH_RESULT } from './MatchResults';
import { dateStringToDate } from './ultil';
type MatchData = [Date, string, string, number, number, string, string]
class CsvFileReader {
    data: MatchData[] = []
    constructor(public filename: string) {
        this.filename = filename
    }
    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: "utf-8"
            })
            .split('\n')
            .map((el: string): string[] => {
                return el.split(',')
            })
            .map((el: string[]): MatchData => {
                ;
                return [
                    dateStringToDate(el[0]),
                    el[1],
                    el[2],
                    el[3] ? parseInt(el[3].toString()) : 0,
                    el[4] ? parseInt(el[4].toString()) : 0,
                    el[5] as MATCH_RESULT,
                    el[6]
                ]
            })
        console.log(this.data)
    }
    serializer() {
        this.data = this.data.map((el: MatchData): MatchData => {
            el[0] = new Date(el[0]);
            return el;
        })
    }
}
export default CsvFileReader