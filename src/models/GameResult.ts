import Issue from "./Issue";
import VoteResult from "./VoteResult";


export default interface RoundResult {
  issue: Issue;
  voteResults: VoteResult[];
}
