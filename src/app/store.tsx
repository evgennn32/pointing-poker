import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice";
import gameReducer from "./slices/gameSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    game: gameReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
