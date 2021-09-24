import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import GameSettings from "../../models/GameSettings";

const initialGame: GameRoomEntity = {
  roomName: "",
  roomID: "",
  scramMuster: {
    id: "",
    image: null,
    firstName: "",
    lastName: "",
    position: "",
    currentUser: false,
    ableToDelete: false,
    score: "",
    scramMaster: false,
  },
  gameSettings: {
    scrumMasterAsPlayer: true,
    changingCardInRoundEnd: false,
    isTimerNeeded: false,
    scoreType: "",
    scoreTypeShort: "",
    roundTime: 0,
    cardsArray: [],
    gameInProgress: false,
  },
  users: [],
  issues: [],
  cards: [],
  gameResults: [],
  rounds: [],
};

const createGameReducer = (
  state: GameRoomEntity,
  action: PayloadAction<User>,
) => {
  //TODO createGame in APIService
  console.log(action.payload);
};

const updateGameSettings = (
  state: GameRoomEntity,
  action: PayloadAction<GameSettings>,
) => {
  //TODO updateGameSettings in APIService
  console.log(action.payload);
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    gameCreate: createGameReducer,
    gameUpdateSettings: updateGameSettings,
  },
});

export const { gameCreate } = gameSlice.actions;
export default gameSlice.reducer;
