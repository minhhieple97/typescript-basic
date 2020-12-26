import MatchReader from './MatchReader';
import { MATCH_RESULT } from './MatchResults';

const reader = new MatchReader('football.csv');
reader.read();
console.log(reader.data)
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MATCH_RESULT.HOME_WIN) manUnitedWins++;
    else if (match[1] === 'Man United' && match[5] === MATCH_RESULT.AWAY_WIN) manUnitedWins++;
}
console.log(`Man united won ${manUnitedWins} games`)
