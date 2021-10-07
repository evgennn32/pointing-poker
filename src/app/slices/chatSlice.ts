import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";
import APIService from "../services/APIservice";
export interface ChatMessage {
  message: string;
  user: User;
}
export interface ChatInterface {
  isActive: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error?: string;
}
export const sendChatMessage = createAsyncThunk(
  "chat/sendStatus",
  async (
    data: { message: ChatMessage; roomId: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await APIService.sendChatMessage(
        data.message,
        data.roomId,
      );
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

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isActive: false,
    messages: [],
    isLoading: false,
  } as ChatInterface,
  reducers: {
    changeChatActive: (state) => {
      state.isActive = !state.isActive;
    },
    chatAddMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendChatMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendChatMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(sendChatMessage.fulfilled, (state, action) => {
        if (action.payload && action.payload.message) {
          state.messages.push(action.payload.message);
        }
      });
  },
});

export const { changeChatActive, chatAddMessage } = chatSlice.actions;

export default chatSlice.reducer;
