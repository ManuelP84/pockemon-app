import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import loggedSlice from "./slices/loggedSlice";
import pockemonSlice from "./slices/pockemonSlice";

const store = configureStore({
  reducer: {
    logged: loggedSlice,
    pokemon: pockemonSlice,
  },
});

export default store;

export type stateType = ReturnType<typeof store.getState>;

type dispatchType = typeof store.dispatch;

export const appDispatch = () => useDispatch<dispatchType>();


