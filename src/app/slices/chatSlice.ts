import { createSlice } from "@reduxjs/toolkit";

/* eslint no-param-reassign: [0] */

// Redux Toolkit allows us to write "mutating" logic in reducers.
// It doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isActive: false,
  },
  reducers: {
    changeChatActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { changeChatActive } = chatSlice.actions;

export default chatSlice.reducer;
