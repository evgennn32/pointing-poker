import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
