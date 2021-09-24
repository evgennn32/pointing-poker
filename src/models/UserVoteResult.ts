import User from "./User";


export default interface UserVoteResult extends User {
  score: string;
}