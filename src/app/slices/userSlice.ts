import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";

const initialUser: User = {
  id: "",
  image: null,
  firstName: "",
  lastName: "",
  position: "",
  currentUser: false,
  ableToDelete: false,
  score: "",
  scramMaster: false,
};

const userUpdateStateReducer = (state: User, action: PayloadAction<User>) => {
  console.log("update user data: ", action.payload);
  return action.payload;
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    userUpdateState: userUpdateStateReducer,
  },
});

export const { userUpdateState } = userSlice.actions;
export default userSlice.reducer;
