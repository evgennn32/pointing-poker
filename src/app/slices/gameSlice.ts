import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import APIService from "../services/APIservice";

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
  APIService.gameCreate(action.payload);
  console.log(action.payload);
};

const updateGame = (
  state: GameRoomEntity,
  action: PayloadAction<GameRoomEntity>,
) => {
  return action.payload;
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    gameCreate: createGameReducer,
    gameUpdate: updateGame,
  },
});

export const { gameCreate, gameUpdate } = gameSlice.actions;
export default gameSlice.reducer;
