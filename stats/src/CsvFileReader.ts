import fs from 'fs'
import { MATCH_RESULT } from './MatchResults';
import { dateStringToDate } from './ultil';
class CsvFileReader {
    data: string[][] = []
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
    }
}
export default CsvFileReader