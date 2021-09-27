export default interface GameSettings {
  scrumMasterAsPlayer: boolean;
  changingCardInRoundEnd: boolean;
  isTimerNeeded: boolean;
  scoreType: string;
  scoreTypeShort: string;
  roundTime: number;
  timeOut: boolean;
  gameInProgress: boolean;
}
