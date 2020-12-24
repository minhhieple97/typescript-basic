import CsvFileReader from './CsvFileReader'
import { MATCH_RESULT } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MATCH_RESULT.HOME_WIN) manUnitedWins++;
    else if (match[1] === 'Man United' && match[5] === MATCH_RESULT.AWAY_WIN) manUnitedWins++;
}
console.log(`Man united won ${manUnitedWins} games`)
