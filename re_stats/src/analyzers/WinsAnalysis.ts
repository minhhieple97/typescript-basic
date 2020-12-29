import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MATCH_RESULT } from "../MatchResults";

class WinsAnalysis implements Analyzer {
    constructor(public team: string) {
        this.team = team
    }
    run(matches: MatchData[]): string {
        let win = 0;
        for (const match of matches) {
            if (match[1] === this.team && match[5] === MATCH_RESULT.HOME_WIN) win++;
            else if (match[1] === this.team && match[5] === MATCH_RESULT.AWAY_WIN) win++;
        }
        return (`Team ${this.team} won ${win} games`)
    }
}
export default WinsAnalysis