import User from "./User";
import GameSettings from "./GameSettings";
import Issue from "./Issue";
import Card from "./Card";
import Round from "./Round";
import GameResult from "./GameResult";


export interface GameRoomEntity {
  roomName: string;
  roomID: string;
  scrumMaster: User,
  gameSettings: GameSettings;
  users: User[];
  issues: Issue[];
  cards: Card[];
  gameResults: GameResult[];
  rounds: Round[];
}



