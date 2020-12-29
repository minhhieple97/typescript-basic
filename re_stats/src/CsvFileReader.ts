import fs from 'fs'
import { DataReader } from './MatchReader'
class CsvFileReader implements DataReader {
    public data: string[][] = []
    constructor(public fileName: string) {
        this.fileName = fileName
    }
    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: "utf-8"
            })
            .split('\n')
            .map((el: string): string[] => {
                return el.split(',')
            })
    }
}
export default CsvFileReader