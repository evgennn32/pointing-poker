import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import APIService from "../services/APIservice";
import Round from "../../models/Round";

const initialRound: Round = {
  roundId: "",
  issueId: "",
  roundInProgress: false,
  usersVoteResults: [],
  statistics: null,
  isLoading: false,
  error: "",
  roundEnded: false,
};

const roundUpdateStateReducer = (
  state: Round,
  action: PayloadAction<Round>,
) => {
  return action.payload;
};

const roundReset = () => {
  return initialRound;
};

export const roundCreate = createAsyncThunk(
  "round/createStatus",
  async (data: { issueId: string; roomId: string }, { rejectWithValue }) => {
    try {
      const response = await APIService.roundCreate(data.issueId, data.roomId);
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

export const roundStart = createAsyncThunk(
  "round/startStatus",
  async (data: { roundId: string; roomId: string }, { rejectWithValue }) => {
    try {
      const response = await APIService.roundStart(data.roundId, data.roomId);
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

export const roundStop = createAsyncThunk(
  "round/stopStatus",
  async (data: { roundId: string; roomId: string }, { rejectWithValue }) => {
    try {
      const response = await APIService.roundStop(data.roundId, data.roomId);
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

export const roundAddVote = createAsyncThunk(
  "round/addVoteStatus",
  async (
    data: {
      roomId: string;
      roundId: string;
      userId: string;
      score: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await APIService.roundAddVote(data);
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

export const roundSlice = createSlice({
  name: "round",
  initialState: initialRound,
  reducers: {
    roundUpdateState: roundUpdateStateReducer,
    roundResetState: roundReset,
  },
  extraReducers: (builder) => {
    builder
      .addCase(roundCreate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(roundCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(roundCreate.fulfilled, (state, action) => {
        if (action.payload && action.payload.round) {
          return { ...action.payload.round, isLoading: false };
        }
      })
      .addCase(roundStart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(roundStart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(roundStart.fulfilled, (state, action) => {
        if (action.payload && action.payload.round) {
          return { ...action.payload.round, isLoading: false };
        }
      })
      .addCase(roundStop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(roundStop.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(roundStop.fulfilled, (state, action) => {
        if (action.payload && action.payload.round) {
          return { ...action.payload.round, isLoading: false };
        }
      })
      .addCase(roundAddVote.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(roundAddVote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(roundAddVote.fulfilled, (state, action) => {
        if (action.payload && action.payload.round) {
          return { ...action.payload.round, isLoading: false };
        }
      });
  },
});

export const { roundUpdateState, roundResetState } = roundSlice.actions;
export default roundSlice.reducer;
