import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";
import APIService from "../services/APIservice";

const initialUser: User = {
  id: "",
  image: null,
  firstName: "",
  lastName: "",
  position: "",
  currentUser: false,
  ableToDelete: false,
  score: "",
  scrumMaster: false,
};

const userUpdateStateReducer = (state: User, action: PayloadAction<User>) => {
  return action.payload;
};

export const userCreate = createAsyncThunk(
  "user/createStatus",
  async (data: { user: User; roomId: string }, { rejectWithValue }) => {
    try {
      const response = await APIService.userCreate(data.user, data.roomId);
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

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    userUpdateState: userUpdateStateReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userCreate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(userCreate.fulfilled, (state, action) => {
        if (action.payload && action.payload.user) {
          return action.payload.user;
        }
      });
  },
});

export const { userUpdateState } = userSlice.actions;
export default userSlice.reducer;
