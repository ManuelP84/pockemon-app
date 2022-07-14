import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "../store";

type userType = {
  userName: string;
  logged: boolean;
};

interface initialStateType {
  user: userType;
}

const initialState: initialStateType = {
  user: {
    userName: "",
    logged: false,
  },
};

const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    logInReducer(state: initialStateType, action) {
      state.user.logged = true;
      state.user.userName = action.payload
    },
    logOutReducer(state: initialStateType) {
      state.user.logged = false;
    },
  },
});

export default loggedSlice.reducer;

export const { logInReducer, logOutReducer } = loggedSlice.actions;

export type { userType };

export type loggedStateType = typeof initialState;

export const selectUser = () => (state: stateType) => state.logged.user;
