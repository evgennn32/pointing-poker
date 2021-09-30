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
      });
  },
});

export const { roundUpdateState, roundResetState } = roundSlice.actions;
export default roundSlice.reducer;
