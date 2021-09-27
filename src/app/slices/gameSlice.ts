import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import APIService from "../services/APIservice";

const initialGame: GameRoomEntity = {
  roomName: "",
  roomID: "",
  scrumMaster: {
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

export const createGame = createAsyncThunk(
  "game/createStatus",
  async (user: User) => {
    const response = await APIService.gameCreate(user);
    if (response) return response;
  },
);

const createGameReducer = (
  state: GameRoomEntity,
  action: PayloadAction<User>,
) => {
  // APIService.gameCreate(action.payload);
  // console.log(action.payload);
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    gameCreate: createGameReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(createGame.fulfilled, (state, action) => {
      if (action.payload && action.payload.roomID) return action.payload;
    });
  },
});

export const { gameCreate } = gameSlice.actions;
export default gameSlice.reducer;
