import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameRoomEntity } from "../../models/GameRoomEntity";
import User from "../../models/User";
import APIService from "../services/APIservice";
import GameSettings from "../../models/GameSettings";
import Card from "../../models/Card";
import Issue from "../../models/Issue";

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
    timeOut: false,
    gameInProgress: false,
  },
  users: [],
  issues: [],
  cards: [],
  gameResults: [],
  rounds: [],
  isLoading: false,
  error: null,
};

export const createGame = createAsyncThunk(
  "game/createStatus",
  async (user: User) => {
    const response = await APIService.gameCreate(user);
    if (response) return response;
  },
);

export const deleteGame = createAsyncThunk(
  "game/deleteStatus",
  async (roomId: string, { rejectWithValue }) => {
    try {
      const response = await APIService.gameDelete(roomId);
      if (response && response.error) {
        return rejectWithValue(response.error);
      }
      return initialGame;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed while sending request");
    }
  },
);

export const joinGame = createAsyncThunk(
  "game/joinStatus",
  async (roomId: string, { rejectWithValue }) => {
    try {
      const response = await APIService.gameJoin(roomId);
      if (response && response.error) {
        return rejectWithValue(response.error);
      }
      return response;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed while sending request");
    }
  },
);

export const updateGameSettings = createAsyncThunk(
  "game/updateStatus",
  async (data: { settings: GameSettings; roomId: string }) => {
    const response = await APIService.gameUpdateSettings(
      data.settings,
      data.roomId,
    );
    if (response) return response;
  },
);

export const cardAdd = createAsyncThunk(
  "game/addCardStatus",
  async (data: { card: Card; roomId: string }) => {
    const response = await APIService.cardAdd(data.card, data.roomId);
    if (response) return response;
  },
);
export const cardDelete = createAsyncThunk(
  "game/deleteCardStatus",
  async (data: { cardId: string; roomId: string }) => {
    const response = await APIService.cardDelete(data.cardId, data.roomId);
    if (response) return response;
  },
);

export const issueAdd = createAsyncThunk(
  "game/addIssueStatus",
  async (data: { issue: Issue; roomId: string }) => {
    const response = await APIService.issueAdd(data.issue, data.roomId);
    if (response) return response;
  },
);
export const issueDelete = createAsyncThunk(
  "game/deleteIssueStatus",
  async (data: { issueId: string; roomId: string }) => {
    const response = await APIService.issueDelete(data.issueId, data.roomId);
    if (response) return response;
  },
);

export const cardUpdate = createAsyncThunk(
  "game/updateCardStatus",
  async (data: { card: Card; roomId: string }) => {
    const response = await APIService.cardUpdate(data.card, data.roomId);
    if (response) return response;
  },
);

export const issueUpdate = createAsyncThunk(
  "game/updateIssueStatus",
  async (data: { issue: Issue; roomId: string }) => {
    const response = await APIService.issueUpdate(data.issue, data.roomId);
    if (response) return response;
  },
);

export const userDelete = createAsyncThunk(
  "game/deleteUserStatus",
  async (data: { userId: string; roomId: string }, { rejectWithValue }) => {
    try {
      const response = await APIService.userDelete(data.userId, data.roomId);
      if (response && response.error) {
        return rejectWithValue(response.error);
      }
      return response;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Failed while sending request");
    }
  },
);

const updateIssuesReducer = (
  state: GameRoomEntity,
  action: PayloadAction<Issue[]>,
) => {
  state.issues = action.payload;
};

const updateUsersReducer = (
  state: GameRoomEntity,
  action: PayloadAction<User[]>,
) => {
  state.users = action.payload;
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {
    updateGameIssues: updateIssuesReducer,
    updateGameUsers: updateUsersReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.fulfilled, (state, action) => {
        if (action.payload && action.payload.roomID) return action.payload;
      })
      .addCase(deleteGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGame.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteGame.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(joinGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(joinGame.fulfilled, (state, action) => {
        if (action.payload && action.payload.game) return action.payload.game;
      })
      .addCase(joinGame.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(updateGameSettings.fulfilled, (state, action) => {
        if (action.payload) state.gameSettings = action.payload;
      })
      .addCase(cardAdd.fulfilled, (state, action) => {
        if (action.payload) {
          state.cards.push(action.payload);
        }
      })
      .addCase(cardDelete.fulfilled, (state, action) => {
        if (action.payload) {
          state.cards = action.payload;
        }
      })
      .addCase(issueAdd.fulfilled, (state, action) => {
        if (action.payload) {
          state.issues.push(action.payload);
        }
      })
      .addCase(issueDelete.fulfilled, (state, action) => {
        if (action.payload) {
          state.issues = action.payload;
        }
      })
      .addCase(issueUpdate.fulfilled, (state, action) => {
        if (action.payload) {
          state.issues = action.payload;
        }
      })
      .addCase(cardUpdate.fulfilled, (state, action) => {
        if (action.payload) {
          state.cards = action.payload;
        }
      })
      .addCase(userDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(userDelete.fulfilled, (state, action) => {
        if (action.payload && action.payload.users) {
          state.isLoading = false;
          state.users = action.payload.users;
        }
      });
  },
});

export const { updateGameIssues, updateGameUsers } = gameSlice.actions;
export default gameSlice.reducer;
