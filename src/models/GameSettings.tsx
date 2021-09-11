import Card from "./Card";

export default interface GameSettings {
  scrumMasterAsPlayer: boolean;
  changingCardInRoundEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  scoreTypeShort: string;
  roundTime: string;
  cardsArray: Card[];
}
